const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3123; // 设置端口为 3123
const cors = require('cors'); // 引入 CORS
app.use(cors()); // 使用 CORS 中间件
app.use(express.json()); // 解析 JSON 请求体

let browser, page;
let copiedHtml = ""; // 存储接收到的 HTML 数据

(async () => {
    // 启动浏览器
    browser = await puppeteer.launch({
        headless: true, // 确保是无头模式
    });

    // 打开新页面
    page = await browser.newPage();

    // 访问网页
    await page.goto('http://localhost:3000');

    // 上传 JSON 文件的 POST 请求处理
    app.post('/upload', async (req, res) => {
        try {
            // 生成以时间戳加 .md 结尾的新文件名
            const timestamp = Date.now();
            const newFileName = `${timestamp}.md`;
            const newFilePath = path.join(__dirname, 'uploads/', newFileName);

            // 获取客户端发送的 JSON 数据
            const { markdown_raw, markdown_type } = req.body;

            if (!markdown_raw || !markdown_type) {
                return res.status(400).json({ code: 'error', message: 'Missing markdown_raw or markdown_type' });
            }

            // 将 markdown_raw 数据保存到文件中
            fs.writeFile(newFilePath, markdown_raw, (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return res.status(500).json({ code: 'error', message: 'Error writing file' });
                }

                console.log('File saved successfully');

                // 文件上传逻辑
                (async () => {
                    try {
                        const fileInput = await page.$('#importFile'); // 找到文件输入框
                        await fileInput.uploadFile(newFilePath); // 上传文件

                        console.log('File uploaded successfully');

                        // 根据 markdownType 动态选择主题
                        await page.click(`#nice-menu-theme-${markdown_type}`);

                        // 模拟点击页面上的复制到微信公众号的操作
                        await page.click('#nice-sidebar-wechat');
                        console.log('Clipboard content saved successfully\n');

                        res.json({ code: 'success', html: copiedHtml });
                    } catch (uploadError) {
                        console.error('Error uploading file:', uploadError);
                        res.status(500).json({ code: 'error', message: 'Error uploading file' });
                    }
                })();
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ code: 'error', message: 'Error processing request' });
        }
    });

    // 接收 HTML 数据的 POST 请求处理
    app.post('/uploadHtml', (req, res) => {
        const { html } = req.body;
        if (!html) {
            return res.status(400).json({ code: 'error', message: 'Missing html' });
        }
        copiedHtml = html;
        res.json({ code: 'success', message: 'HTML received successfully' });
    });

    // 启动服务器
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})();
