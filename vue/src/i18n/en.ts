import type { IIBI18nMap } from '.'

export const en: IIBI18nMap = {
  inputAlias: 'Input Alias',
  addAliasCompleted: 'Add Alias Completed',
  alias: 'Alias',
  exit: 'Exit',
  'select-all': 'Select All',
  'rerverse-select': 'Reverse Select',
  'clear-all-selected': 'Clear All Selected',
  'keep-multi-selected': 'Keep Multi-selected',
  'Source Identifier': 'Source',
  openWithDefaultApp: 'Open with default app',
  saveSelectedAsJson: 'Save selected image info',
  saveAllAsJson: 'Save all image info',
  saveLoadedImageAsJson: 'Save loaded image info',
  selectedItems: ' {0} selected',
  items: '{0} items',
  scrollDownToComparePrompt: 'Scroll down to compare prompts',
  sourceText: 'Source Text',
  structuredData: 'Structured Data',
  searchScope: 'Search Scope',
  specifiedSearchFolder: 'Specify the folders to search, separate multiple folders with commas or line breaks',
  batchAddTag: 'Batch Add Tag',
  batchRemoveTag: 'Batch Remove Tag',
  imageCompareTips:
    'When dragging files, this panel will also appear, so you don\'t need to open the "Image Comparison" feature separately.',
  dragToResizePanel: 'Drag to resize the panel',
  clickToToggleMaximizeMinimize: 'Click to toggle maximize/minimize',
  dragToMovePanel: 'Drag to move the panel',
  privacyAndSecurity: 'Security & Privacy',
  deleteOneOnlySkipConfirm: 'Do not confirm when deleting a single file',
  resetOnGlobalSettingsPage: 'You can reset on the global settings page',
  secretKeyMustBeConfigured: 'Secret Key must be configured',
  secretKeyRequiredWarnMsg: `For security reasons, you must separately configure Secret Key for this extension, refer to the IIB_SECRET_KEY in the .env.example file under the root directory of this extension. 
  This error only appears when gradio-auth is configured.`,
  remove: 'Remove',
  batchDownload: 'Batch Download',
  archive: 'Archive',
  zipDownload: 'Download as ZIP',
  batchDownloaDDragAndDropHint:
    'Use drag and drop or the \'Send to Batch Download\' option in the right-click menu to add images from other pages here. Multiple selections are supported.',
  lyco: 'LyCORIS',
  sendToThirdPartyExtension: 'Send to third-party extension',
  createFolder: 'Create Folder',
  inputFolderName: 'Input Folder Name',
  desktop: 'Desktop',
  move: 'Move',
  majorUpdateCustomCellSizeTips: 'Major Update: You can now customize the size of the grid image. Adjust it in the global settings page or in the "More" menu in the upper right corner.',
  ImageBrowsingSettings: 'Image Browsing Settings',
  other: 'Other',
  livePreview: 'Live Preview',
  gridCellWidth: 'Grid Cell Width (px)',
  showChangeIndicators: 'Show Change Indicators',
  seedAsChange: 'Seed as Change',
  defaultShowChangeIndicators: 'Default Show Change Indicators',
  defaultSeedAsChange: 'Default Compare Seed as Change',
  defaultGridCellWidth: 'Default Grid Cell Width (px)',
  thumbnailResolution: 'Thumbnail Resolution (px)',
  inputTargetFolderPath: 'Enter the absolute path of the target folder',
  pathDoesNotExist: 'Path does not exist',
  confirmToAddToExtraPath:
    'Are you sure you want to add? This may take a lot of time to index if the folder is large. ',
  clientSpecificSettings: 'Client-specific settings',
  initiateSoftwareStartupConfig: 'Initiate software startup configuration',
  'tauriLaunchConf.readSdWebuiConfigTitle': 'Read Stable Diffusion Webui Config',
  'tauriLaunchConf.readSdWebuiConfigDescription':
    'If you have installed sd-webui and this extension, it is recommended to use this option to directly read the configuration and share data.',
  'tauriLaunchConf.selectSdWebuiFolder': 'Click to select the SD-webui folder',
  'tauriLaunchConf.skipThisConfigTitle': 'Skip This Configuration',
  'tauriLaunchConf.skipThisConfigDescription':
    'All features will still be available and you can reset them in the settings page.',
  'tauriLaunchConf.skipButton': 'Skip',
  'tauriLaunchConfMessages.configNotFound':
    'Cannot find the corresponding configuration. Please check if the selected folder is correct.',
  'tauriLaunchConfMessages.folderNotFound':
    'Cannot find the corresponding folder. Please check if the selected folder is correct.',
  'tauriLaunchConfMessages.configCompletedMessage':
    'Configuration completed. The application will restart shortly.',
  'tauriLaunchConfMessages.firstTimeUserTitle':
    'It looks like this is your first time using the application. Some configuration is required.',
  selectAll: 'Select All',
  close: 'Close',
  fileName: 'File Name',
  resolution: 'Resolution',
  fileSize: 'File Size',
  fullscreenview: 'Fullscreen View',
  promptcompare: 'Compare Prompts',
  imgCompare: 'Image Comparison',
  share: 'Share',
  dragImageHere: 'Drag image here',
  copyLocationUrlSuccessMsg:
    'Copy completed, you can directly open the current folder through the copied link',
  multiSelectTips:
    'You can hold down the Shift, Ctrl, or Cmd key and then click on files to perform batch delete/move operations',
  document: 'Document',
  copy: 'Copy',
  edit: 'Edit',
  defaultSortingMethod: 'Default Sorting Method',
  defaultViewMode: 'Default View Mode',
  showPreviewImage: 'Show Preview Image',
  dontShowAgain: 'Don\'t show again',
  accessControlModeTips:
    'To ensure data security, you are currently running in access control mode, which only allows access to authorized folders. You can adjust the access permissions settings (IIB_ACCESS_CONTROL) by editing the .env file in the root directory of this extension. If the .env file does not exist, you can copy the .env.example file and rename it to .env.',
  changlog: 'Change log',
  clear: 'Clear',
  toggleTagSelection: 'Toggle Selection of Tag "{tag}"',
  fullscreenRestriction:
    'Due to technical limitations, the first image cannot be deleted when opening the Full-screen view.',
  shortcutKey: 'Keyboard Shortcuts (Only Available in Full-screen view mode)',
  shortcutKeyDescription:
    'Click on the input box and press the shortcut key you want to use, supporting combinations with Shift and Ctrl.',
  serverKeyRequired:
    'The server has configured a key. You must provide the same key to continue using it.',
  removeFromSearchScanPathAndQuickMove: 'Remove from Search Scan Path and Quick Move',
  addToSearchScanPathAndQuickMove: 'Add to Search Scan Path and Quick Move',
  openWithLocalFileBrowser: 'Open with Local File Browser',
  'fuzzy-search-noResults': 'Nothing was found',
  'fuzzy-search-placeholder': 'Enter a part of the image information or filename to search',
  'fuzzy-search': 'Fuzzy search',
  autoUpdate: 'Detected changes, automatically updating',
  faq: 'FAQ',
  selectExactMatchTag: 'Select Exact Match Tags',
  selectAnyMatchTag: 'Optional, Select Any Match Tags',
  selectExcludeTag: 'Optional, Select Exclude Tags',
  exactMatch: 'Exact Match',
  anyMatch: 'Match Any',
  exclude: 'Exclude',
  'auto.refreshed': 'Auto refresh completed!',
  copied: 'Copied!',
  'index.expired': 'Index expired, updating automatically',
  manualExitFullScreen:
    'You have deleted the last image and may need to manually exit Full-screen view',
  'walk-mode-move-message': 'Moving position is only allowed using \'Quick Move\' in walk mode',
  refreshCompleted: 'Refresh completed',
  //! MissingTranslations
  addedTagToImage: 'Tag "{tag}" has been added to this image',
  removedTagFromImage: 'Tag "{tag}" has been removed from this image',
  openContextMenu: 'Open context menu',
  copyPrompt: 'Copy prompt',
  copyPositivePrompt: 'Copy positive prompt',
  toggleTag: 'Toggle Tag Selection (Favorite)',
  addCompleted: 'Add completed',
  removeCompleted: 'Remove Completed',
  existInOtherType: 'Already exists in other type',
  alreadyExists: 'Already exists',
  cancel: 'Cancel',
  submit: 'Submit',
  add: 'Add',
  custom: 'Custom',
  needGenerateIdx:
    'You need to click the button to generate an index for searching images. \n This process may take a few minutes to complete.',
  search: 'Search',
  UpdateIndex: 'Update index',
  generateIndexHint: 'Generate index for search image',
  Model: 'Model',
  Sampler: 'Sampler',
  lora: 'LoRA',
  size: 'Size',
  pos: 'Positive Prompt',
  unknownSavedDir: 'Cannot find the saved folder (outdir_save field in the config)',
  errorOccurred: 'An error occurred',
  useThumbnailPreview: 'Use thumbnail preview',
  gridThumbnailWidth: 'Grid thumbnail width',
  start: 'Start',
  tip: 'Tip',
  sortByDateAscending: 'Updated date ascending',
  sortByDateDescending: 'UPdated date descending',
  sortByCreatedDateAscending: 'Created date ascending',
  sortByCreatedDateDescending: 'Created date descending',
  sortByNameAscending: 'Name ascending',
  sortByNameDescending: 'Name descending',
  sortBySizeAscending: 'Size ascending',
  sortBySizeDescending: 'Size descending',
  inputAddressAndPressEnter: 'Input address and press Enter',
  go: 'Go',
  unknownError: 'Unknown error',
  loadingNextFolder: 'Loading files from the next folder',
  moveFailedCheckPath: 'Move failed. Check your path input.',
  detailList: 'Detail list',
  previewGrid: 'Preview grid',
  moveSelectedFilesTo: 'Move / Copy selected files to',
  confirm: 'Confirm',
  download: 'Download',
  local: 'Local',
  sendImageFailed:
    'Failed to send image. Please contact the developer with the error message from the console.',
  confirmDelete: 'Are you sure you want to delete?',
  deleteSuccess: 'Deleted successfully',
  doubleClickToCopy: 'Double-click to copy',
  root: 'Root',
  drive: ' drive',
  refresh: 'Refresh',
  quickMove: 'Quick move',
  more: 'More',
  viewMode: 'View mode',
  sortingMethod: 'Sorting method',
  copyPath: 'Copy path',
  deleteSelected: 'Delete',
  previewInNewWindow: 'Open in new window',
  copySourceFilePreviewLink: 'Copy source file preview link',
  viewGenerationInfo: 'View generation information (prompt, etc.)',
  sendToTxt2img: 'Send to txt2img',
  sendToImg2img: 'Send to img2img',
  sendToInpaint: 'Send to Inpaint',
  sendToBatchDownload: 'Send to BatchDownload',
  sendToExtraFeatures: 'Send to Extra',
  sendToControlNet: 'Send to ControlNet',
  loadNextPage: 'Load next page',
  localFile: 'Local file',
  globalSettings: 'Global settings',
  welcome: 'Welcome',
  openInNewWindow: 'Open in new tab',
  restoreLastRecord: 'Restore last record',
  launch: 'Launch',
  walkMode: 'Use Walk mode to browse images',
  launchFromQuickMove: 'Launch from Quick Move',
  recent: 'Recent',
  emptyStartPage: 'Empty start page',
  t2i: 'txt2img',
  i2i: 'img2img',
  saveButtonSavesTo: 'save',
  extra: 'extras',
  gridImage: 'Grid image',
  'i2i-grid': 'img2img grid',
  image: 'Image',
  't2i-grid': 'txt2img grid',
  workingFolder: 'working folder',
  lang: 'Language',
  langChangeReload: 'Reload: Some changes may require a reload to take effect',
  openOnTheRight: 'Open to the Side',
  openInNewTab: 'Open in a new tab',
  openWithWalkMode: 'Open with Walk Mode',
  longPressOpenContextMenu: 'Support long press to open right-click menu',
  searchResults: 'Search Results',
  imgSearch: 'Image Search',
  onlyFoldersAndImages: 'Only show folders/images/videos',
  send2savedDir: 'Send to saved folder',
  regexSearchEnabledHint:
    '(You can also enable regex search by clicking the regex icon on the right)',
  rebuildImageIndex: 'Rebuild image index',
  confirmRebuildImageIndex: 'Confirm rebuilding image index?',
  rebuildComplete: 'Rebuild complete',
  tagSearchNoResultsMessage:
    'It seems like no results were found. Try rebuilding the index to remove unused tags?'
}
