import {observable, action} from "mobx";

class View {
  @observable isEditAreaOpen = true;

  @observable isPreviewAreaOpen = true;

  @observable isStyleEditorOpen = false;

  @observable isImmersiveEditing = false;

  @observable isFootnotesVisible = true;

  @observable isFigcaptionVisible = true;

  @action
  setEditAreaOpen = (isEditAreaOpen) => {
    this.isEditAreaOpen = isEditAreaOpen;
  };

  @action
  setPreviewAreaOpen = (isPreviewAreaOpen) => {
    this.isPreviewAreaOpen = isPreviewAreaOpen;
  };

  @action
  setStyleEditorOpen = (isStyleEditorOpen) => {
    this.isStyleEditorOpen = isStyleEditorOpen;
  };

  @action
  setImmersiveEditing = (isImmersiveEditing) => {
    this.isImmersiveEditing = isImmersiveEditing;
  };

  @action
  setFootnotesVisible = (isFootnotesVisible) => {
    this.isFootnotesVisible = isFootnotesVisible;
  };

  @action
  setFigcaptionVisible = (isFigcaptionVisible) => {
    this.isFigcaptionVisible = isFigcaptionVisible;
  };
}

const store = new View();

export default store;
