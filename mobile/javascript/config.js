﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Cargando folleto...";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#313131";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#000000";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailSubject="Lee esta información sobre Babel";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="2666";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Show";bookConfig.bgBeginColor="#B4BB4B";bookConfig.bgEndColor="#B4BB4B";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.passwordTips="Please contact the <a href=\'mailto:author@sample.com\'><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="Yes";bookConfig.MidBgColor="#951403";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=20;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1448;;bookConfig.securityType="1";bookConfig.CreatedTime ="250621195831";bookConfig.bookTitle="Babel: demoler la torre de una lengua y mil voces";bookConfig.bookmarkCR="c7edae9b7bff3a4b23267acd8cf14c0d56cadadc";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Spanish",btnFirstPage:"Primera Página",btnNextPage:"Página siguiente",btnLastPage:"Última Página",btnPrePage:"Página Anterior",btnDownload:"Descargar",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Borrar",frmSearchPrompt:"Clear",btnBookMark:"Tabla de contenidos",btnHelp:"Ayuda",btnHome:"Inicio",btnFullScreen:"Permitir Pantalla Completa",btnDisableFullScreen:"Deshabilitar Pantalla Completa",btnSoundOn:"Sonido Encendido",btnSoundOff:"Sonido Apagado",btnShareEmail:"Compartir",btnSocialShare:"Redes Sociales",btnZoomIn:"Agrandar",btnZoomOut:"Alejar",btnDragToMove:"Modo de Arrastre",btnAutoFlip:"Auto pasar",btnStopAutoFlip:"Detener Auto Pasar",btnGoToHome:"Volver al inicio",frmHelpCaption:"Ayuda",frmHelpTip1:"Ayuda uno",frmHelpTip2:"Arrastrar el Borde con el Maus",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas las Páginas",frmPrintPrintCurrentPage:"Imprimir Página actual",frmPrintPrintRange:"Imprimir Páginas:",frmPrintExampleCaption:"Ejemplo: 2,5,8-26",frmPrintPreparePage:"Preparando la Página:",frmPrintPrintFailed:"Error de Impresión:",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",loginCaption:"Entrar",loginInvalidPassword:"Contraseña no válida!",loginPasswordLabel:"Contraseña:",loginBtnLogin:"Entrar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Acerca de",frnAboutCaption:"Acerca de y Contacto",btnSinglePage:"Página Simple",btnDoublePage:"Página doble",btnSwicthLanguage:"Cambiar el Idioma",tipChangeLanguage:"Elegir un Idioma...",btnMoreOptionsLeft:"Mas Opciones",btnMoreOptionsRight:"Mas Opciones",btnFit:"Ajustar la Ventana",smallModeCaption:"Click para ver Pantalla Completa",btnAddAnnotation:"Agregar Notas",btnAnnotation:"Notas",FlipPageEditor_SaveAndExit:"Guardar y Salir",FlipPageEditor_Exit:"Salir",DrawToolWindow_Redo:"Rehacer",DrawToolWindow_Undo:"Deshacer",DrawToolWindow_Clear:"Limpiar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Ancho",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Borrador",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Ancho de Borde",TStuff_BorderAlph:"Borde Alfa",TStuff_BorderColor:"Color del Borde",DrawToolWindow_TextNote:"Texto Nota",AnnotMark:"Marcador",lastpagebtnHelp:"Ultima Página",firstpagebtnHelp:"Primera Página",homebtnHelp:"Volver a la Página Principal",aboubtnHelp:"Acerca de",screenbtnHelp:"Abrir en Pantalla Completa",helpbtnHelp:"Mostrar la Ayuda",searchbtnHelp:"Buscar en Páginas",pagesbtnHelp:"Ver las miniaturas de este Folleto",bookmarkbtnHelp:"Abrir Marcador",AnnotmarkbtnHelp:"Abrir la Tabla de Contenidos",printbtnHelp:"Imprimir el folleto",soundbtnHelp:"Prender o Apagar el Sonido",sharebtnHelp:"Enviar Email a",socialSharebtnHelp:"Redes Sociales",zoominbtnHelp:"Agrandar",downloadbtnHelp:"Descargar el folleto",pagemodlebtnHelp:"Cambiar entre Modo de Página Simple y Doble",languagebtnHelp:"Cambiar Idioma",annotationbtnHelp:"Agregar Anotación",addbookmarkbtnHelp:"Agregar Marcador",removebookmarkbtnHelp:"Eliminar Marcador",updatebookmarkbtnHelp:"Actualizar Marcador",btnShoppingCart:"Carrito de Compras",Help_ShoppingCartbtn:"Ayudar Carrito de Compras",Help_btnNextPage:"Siguiente Página",Help_btnPrePage:"Anterior Página",Help_btnAutoFlip:"Auto pasar",Help_StopAutoFlip:"Detener auto pasar",btnaddbookmark:"Agregar",btndeletebookmark:"Eliminar",btnupdatebookmark:"Actualizar",frmyourbookmarks:"Mis Anotaciones",frmitems:"Artículos",DownloadFullPublication:"Publicación Completa",DownloadCurrentPage:"Página Actual",DownloadAttachedFiles:"Archivos Adjuntos",lblLink:"Enlace",btnCopy:"Botón Copiar",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"¿Desea recuperar la sesión anterior?",tmpl_Backgoundsoundon:"Fondo Sonido Encendido",tmpl_Backgoundsoundoff:"Fondo Sonido Apagado ",tmpl_Flipsoundon:"Flip Sonido Encendido",tmpl_Flipsoundoff:"Flip Sonido Apagado ",Help_PageIndex:"Número de actual Página",tmpl_PrintPageRanges:"Rango de Página",tmpl_PrintPreview:"Previsualizar",btnSelection:"Seleccionar Texto",loginNameLabel:"Nombre:",btnGotoPage:"Ir a Página",btnSettings:"Configuración",soundSettingTitle:"Sonido Configuración",closeFlipSound:"Sonido de pase de cierre",closeBackgroundSound:"Cerrar el Sonido de Fondo",frmShareCaption:"Compartiendo",frmShareLinkLabel:"Enlace:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartir con grupo",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Ir a página ",btnPageBack:"Retroceder",btnPageForward:"Adelante",SelectTextCopy:"Copiar Texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrito de Compras",TStuffCart_DetailedQuantity:"Cantidad",TStuffCart_DetailedPrice:"Precio",ShappingCart_Close:"Cerrar",ShappingCart_CheckOut:"Proceso",ShappingCart_Item:"Artículo",ShappingCart_Total:"Total precio",ShappingCart_AddCart:"Añadir a carrito",ShappingCart_InStock:"En Stock",TStuffCart_DetailedCost:"Costo de transporte",TStuffCart_DetailedTime:"Tiempo de entrega",TStuffCart_DetailedDay:"día(s)",ShappingCart_NotStock:"Poco en stock",btnCrop:"Ajustar",btnDragButton:"Arrastrar",btnFlipBook:"Libro flip",btnSlideMode:"Modo de presentación",btnSinglePageMode:"Modo de página sencilla",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Cerrar",btnDoublePage:"Página doble",btnBookStatus:"Book View",checkBoxInsert:"Ingrese página actual",lblLast:"Esta es la última página.",lblFirst:"Esta es la primera página.",lblFullscreen:"Clic para ver en pantalla completa",lblName:"Nombre",lblPassword:"Contraseña",lblLogin:"Entrar",lblCancel:"Cancelar",lblNoName:"Nombre de usuario no puede estar vacío.",lblNoPassword:"Contraseña no puede estar vacía.",lblNoCorrectLogin:"Ingrese el nombre y contraseña correctos.",btnVideo:"Galería de video",btnSlideShow:"Presentación",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",btnDragToMove:"Modo de Arrastre",btnPositionToMove:"Mover por posición del mouse",lblHelp1:"Arrastre la esquina de la página para ver",lblHelp2:"Doble clic para acercar y alejar",lblCopy:"Copiar",lblAddToPage:"añadir a página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Borrar",lblRemoveAll:"Quitar todo",tltCursor:"cursor",tltAddHighlight:"añadir resaltado",tltAddTexts:"añadir textos",tltAddShapes:"añadir formas",tltAddNotes:"añadir notas",tltAddImageFile:"añadir archivo de imagen",tltAddSignature:"añadir firma",tltAddLine:"añadir línea",tltAddArrow:"añadir flecha",tltAddRect:"añadir recta",tltAddEllipse:"añadir elipse",lblDoubleClickToZoomIn:"Doble clic para acercar",frmShareCaption:"Compartiendo",frmShareLabel:"Comparir",frmShareInfo:"Puedes compartir tu publicación fácilmente a las redes sociales. Sólo haz clic abajo.",frminsertLabel:"Insertar a sitio",frminsertInfo:"Ue el código debajo para insertar en su sitio.",btnQRCode:"Clic para escanear código QR",btnRotateLeft:"Rotar a la izquierda",btnRotateRight:"Rotar a la derecha",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmDownload:"Download",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",btnDownloadPosterPrompt:"Click to download the poster",infLongPressToSavePoster:"Press and hold the mobile terminal to save the poster",infLongPressToIndentify:"Long press to identify QR code",infScanCodeToView:"Scan code to read",frmaboutcaption:"Contact",frmaboutDESCRIPTION:"Description",frmaboutAUTHOR:"Author",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",infDeleteNote:"Do you want to delete the note?",proFullScreenWarn:"Current browser does not support full-screen,Please use Chrome for best results",btnBack:"Backs",frmVideoListTitle:"Video list",frmVideoTitle:"Video",lblConfirm:"Confirm",frmBookMark:"Marcador",btnFullscreen:"Pantalla completa",btnExitFullscreen:"Salir de pantalla completa",btnMore:"Más",frmPrintall:"Imprimir todas las páginas",frmPrintcurrent:"Imprimir la página actual",frmPrintRange:"Intervalo de impresión",frmPrintexample:"Ejemplo: 2,3,5-10",frmPrintbtn:"impresión",frmaboutcontactinformation:"Información de Contacto",frmSearch:"Búsqueda",frmToc:"Tabla de Contenido",btnTableOfContent:"Mostrar Tabla de Contenidos",lblDescription:"Título",frmLinkLabel:"Enlazar",frmQrcodeCaption:"Escanee el código bidimensional inferior para verlo con el teléfono móvil."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.689106","y":"0.261858","width":"0.227251","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://mpago.li/33GKDvS"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.528572","y":"0.291554","width":"0.167626","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://mpago.li/33GKDvS"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.665214","y":"0.840983","width":"0.278644","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://vaki.co/es/vaki/mil-voces-babel"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.528572","y":"0.870678","width":"0.309917","height":"0.034986"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://vaki.co/es/vaki/mil-voces-babel"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.055223","y":"0.261858","width":"0.388228","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.amazon.com/dp/B0FC4RG3LT"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.009062","y":"0.292772","width":"0.228753","height":"0.033396"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.amazon.com/dp/B0FC4RG3LT"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.316525","y":"0.549906","width":"0.118434","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:metaforica.pro@gmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.009062","y":"0.579601","width":"0.303205","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:metaforica.pro@gmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.790459","y":"0.520210","width":"0.118434","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:metaforica.pro@gmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.486028","y":"0.549906","width":"0.303204","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:metaforica.pro@gmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.744028","y":"0.261858","width":"0.170838","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:metaforica.pro@gmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.486028","y":"0.291554","width":"0.239484","height":"0.034987"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:metaforica.pro@gmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.823319","y":"0.710587","width":"0.111483","height":"0.078826"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.linkedin.com/groups/13285396/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.479483","y":"0.710587","width":"0.111481","height":"0.078826"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.facebook.com/groups/758621786495515"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.479688","y":"0.710587","width":"0.111073","height":"0.078826"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.facebook.com/groups/758621786495515"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.594655","y":"0.709399","width":"0.111481","height":"0.078826"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.instagram.com/demolerbabel/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.479483","y":"0.793921","width":"0.111481","height":"0.078825"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.tiktok.com/@mil_voces_babel"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.709827","y":"0.709399","width":"0.111483","height":"0.078826"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://x.com/DemolerBabel"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.823319","y":"0.793921","width":"0.111483","height":"0.078825"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://vaki.co/es/vaki/mil-voces-babel"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.594655","y":"0.793921","width":"0.111481","height":"0.078825"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://mpago.li/33GKDvS"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.709827","y":"0.793921","width":"0.111483","height":"0.078825"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.amazon.com/dp/B0FC4RG3LT"}}],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}