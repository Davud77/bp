export const detailsLabels = {
  ru: {
    details: "Подробнее",
    aboutProject: "О проекте",
    allProjects: "Все проекты",
    compatibility: "Совместимость",
    interface: "Интерфейс",
    screenshot: "Открыть скриншот",
    features: "Возможности",
    start: "Как начать",
    releases: "Скачать с GitHub",
    documentation: "Документация",
  },
  en: {
    details: "Project details",
    aboutProject: "About",
    allProjects: "All projects",
    compatibility: "Compatibility",
    interface: "Interface",
    screenshot: "Open screenshot",
    features: "Features",
    start: "Getting started",
    releases: "Download from GitHub",
    documentation: "Documentation",
  },
};

export const projectDetails = {
  "bp-autocad-tools": {
    screenshot: { file: "autocad.png", width: 1344, height: 124 },
    guide: "/blob/main/docs/USAGE.md",
    release: "/releases/latest",
    ru: {
      screenshotCaption: "Вкладка BotPlus AT в AutoCAD",
      features: [
        ["Оформление чертежей", "Нумеруйте тексты и атрибуты по заданному шагу, вставляйте обозначения разрезов, узлов и отметок, редактируйте поля штампа."],
        ["Подготовка DWG", "Выбирайте объекты по образцу, считайте длины и площади и очищайте чертежи перед передачей заказчику."],
        ["Таблицы Excel", "Выгружайте таблицы AutoCAD в XLSX, редактируйте их в Excel и загружайте изменения обратно в чертёж."],
        ["Пакетный выпуск PDF", "Задайте порядок листов и выпустите комплект PDF по форматкам в модели."],
      ],
      setup: "Закройте AutoCAD и Core Console, затем запустите установщик из GitHub Releases. После установки откройте AutoCAD и перейдите на вкладку BotPlus AT.",
    },
    en: {
      screenshotCaption: "The BotPlus AT ribbon in AutoCAD",
      features: [
        ["Drawing annotations", "Number text and attributes with a custom increment, insert section, detail, and level symbols, and edit title block fields."],
        ["DWG preparation", "Select similar objects, calculate lengths and areas, and clean up drawings before handing them over."],
        ["Excel tables", "Export AutoCAD tables to XLSX, edit them in Excel, and import the changes back into the drawing."],
        ["Batch PDF plotting", "Set the sheet order and plot a PDF set using the drawing frames in model space."],
      ],
      setup: "Close AutoCAD and Core Console, then run the installer from GitHub Releases. Open AutoCAD and select the BotPlus AT ribbon tab.",
    },
  },
  "bp-revit-tools": {
    screenshot: { file: "revit.png", width: 1350, height: 123 },
    guide: "/blob/main/docs/INSTALLATION.md",
    release: "/releases/latest",
    ru: {
      screenshotCaption: "Вкладка BotPlus RT в Revit",
      features: [
        ["Перенос из Archicad", "Ac2Revit переносит данные из открытого Archicad через Tapir и IFC. Можно продолжить сеанс переноса и проверить промежуточный JSON."],
        ["Координация отверстий", "Находите пересечения инженерных сетей с конструкциями, ведите реестр, согласовывайте позиции и создавайте вырезы в модели."],
        ["Отопление и вентиляция", "Экспортируйте помещения и ограждения, просматривайте их в 3D, рассчитывайте теплопотери и подбирайте отопительные приборы."],
        ["MCP для Revit", "Подключайте AI-клиент через локальный MCP-мост для работы с моделью, видами, листами и аннотациями."],
      ],
      setup: "Закройте Revit 2026 и запустите установщик BotPlus RT по инструкции в репозитории. Для переноса PLN понадобится Archicad с Tapir. После установки инструменты появятся на вкладке BotPlus RT.",
    },
    en: {
      screenshotCaption: "The BotPlus RT ribbon in Revit",
      features: [
        ["Archicad transfer", "Ac2Revit transfers data from an open Archicad model through Tapir and IFC. You can resume a transfer session and validate its intermediate JSON."],
        ["Opening coordination", "Find MEP clashes with building elements, track and review openings, and create native cuts in the model."],
        ["Heating and ventilation", "Export rooms and envelope elements, review them in 3D, calculate heat loss, and size heating equipment."],
        ["MCP for Revit", "Connect an AI client through a local MCP bridge to work with the model, views, sheets, and annotations."],
      ],
      setup: "Close Revit 2026 and run the BotPlus RT installer as described in the repository. Transferring PLN files requires Archicad with Tapir. The tools appear on the BotPlus RT ribbon tab after installation.",
    },
  },
  "bp-maps": {
    screenshot: { file: "maps.jpg", width: 1285, height: 842 },
    guide: "/blob/master/README.md#быстрый-локальный-запуск",
    ru: {
      screenshotCaption: "Рабочее пространство BotPlus Maps со списком карт и публикаций",
      features: [
        ["Ортофотопланы", "Подключайте растры с диска или NAS. Платформа готовит тайлы, чтобы браузеру не приходилось скачивать исходный TIFF."],
        ["Фото и панорамы 360°", "Размещайте съёмку на карте, просматривайте панорамы по точкам и организуйте материалы по папкам и тегам."],
        ["Векторные слои", "Используйте PostgreSQL с PostGIS, настраивайте подложки, порядок и прозрачность слоёв."],
        ["Публикация карт", "Сохраняйте конфигурацию карты и публикуйте её по отдельной ссылке с выбранными слоями."],
      ],
      setup: "Для локального запуска нужны Git, Python 3 и Docker с Compose v2. Инструкция в README описывает настройку хранилища и создание первого администратора.",
    },
    en: {
      screenshotCaption: "The BotPlus Maps workspace showing saved and published maps",
      features: [
        ["Orthophotos", "Connect raster files from disk or NAS. The platform serves tiles so the browser can display them without downloading the source TIFF."],
        ["Photos and 360° panoramas", "Place imagery on the map, open panoramas from their locations, and organize media with folders and tags."],
        ["Vector layers", "Use PostgreSQL with PostGIS and configure basemaps, layer order, and opacity."],
        ["Map publishing", "Save a map configuration and publish it with selected layers at a separate URL."],
      ],
      setup: "Local setup requires Git, Python 3, and Docker with Compose v2. The README explains how to configure storage and create the first administrator.",
    },
  },
  "bp-pdf-editor": {
    screenshot: { file: "pdf.jpg", width: 2704, height: 1582 },
    guide: { ru: "/blob/main/README.md", en: "/blob/main/README.en.md" },
    release: "/releases/latest",
    ru: {
      screenshotCaption: "Стартовый экран BotPlus PDF Editor с лентой и боковыми панелями",
      features: [
        ["Редактирование текста", "Изменяйте существующий текст PDF и добавляйте новые текстовые блоки. Для изменения содержимого используется встроенный PDFium."],
        ["Аннотации", "Выделяйте и подчёркивайте текст, добавляйте заметки, выноски, стрелки и фигуры."],
        ["Работа со страницами", "Просматривайте миниатюры, вставляйте, дублируйте, поворачивайте и удаляйте страницы."],
        ["Поиск и OCR", "Ищите совпадения по всему документу. Для сканов доступно отдельное распознавание текста."],
      ],
      setup: "Скачайте DMG из GitHub Releases, откройте образ и перетащите BotPlus PDF Editor в папку «Программы». Интерфейс доступен на русском и английском.",
    },
    en: {
      screenshotCaption: "The BotPlus PDF Editor start screen with its ribbon and side panels",
      features: [
        ["Text editing", "Edit existing PDF text and add new text blocks. The app uses its built-in PDFium engine for content editing."],
        ["Annotations", "Highlight and underline text or add notes, callouts, arrows, and shapes."],
        ["Page tools", "Browse thumbnails, then insert, duplicate, rotate, or delete pages."],
        ["Search and OCR", "Find matches across a document. Use the separate OCR command to recognize text in scans."],
      ],
      setup: "Download the DMG from GitHub Releases, open it, and drag BotPlus PDF Editor to Applications. The interface supports Russian and English.",
    },
  },
  "bp-icloud2syno": {
    screenshot: { file: "sync.jpg", width: 1364, height: 1368 },
    guide: "/blob/main/README.md",
    release: "/releases/latest",
    ru: {
      screenshotCaption: "Настройки источника и назначения в SynologyPhotoSync",
      features: [
        ["Оригинальные файлы", "Приложение извлекает доступные оригиналы через PhotoKit и передаёт их на NAS без перекодирования."],
        ["Фото, видео и Live Photos", "Переносите снимки, ролики и обе части Live Photo. Загруженные файлы можно добавить в альбомы Synology Photos."],
        ["Управление передачей", "Настраивайте число одновременных загрузок и отслеживайте прогресс в строке меню macOS."],
        ["Настройка назначения", "Выберите источник, диапазон дат и личное или общее пространство Synology Photos."],
      ],
      setup: "Установите приложение из DMG. В настройках укажите HTTPS-адрес DSM, проверьте подключение, затем выберите медиатеку и пространство назначения.",
    },
    en: {
      screenshotCaption: "Library and destination settings in SynologyPhotoSync",
      features: [
        ["Original files", "The app retrieves available originals through PhotoKit and sends them to your NAS without re-encoding."],
        ["Photos, videos, and Live Photos", "Transfer photos, videos, and both parts of each Live Photo. Add uploaded files to Synology Photos albums."],
        ["Transfer controls", "Choose how many files to upload at once and track progress in the macOS menu bar."],
        ["Destination settings", "Choose a source, date range, and Personal or Shared Space in Synology Photos."],
      ],
      setup: "Install the app from the DMG. In Settings, enter your DSM HTTPS address, verify the connection, then choose the library and destination.",
    },
  },
};
