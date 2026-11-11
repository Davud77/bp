export const searchCopy = {
  ru: {
    title: "BOTPLUS — плагины AutoCAD и Revit, MCP для BIM, PDF для Mac",
    description: "Плагины AutoCAD и Revit, MCP-мост для автоматизации BIM, геоплатформа, PDF-редактор для Mac и перенос фото в Synology. Описания, установка и исходный код.",
    about: "Инструменты для проектирования и ваших данных",
    paragraphs: [
      "BOTPLUS объединяет утилиты для выпуска чертежей в AutoCAD, работы с BIM-моделями в Revit и повседневных задач на Mac. В каталоге можно выбрать приложение по задаче, проверить совместимость и перейти к документации и установке.",
      "BotPlus AT помогает с оформлением DWG, таблицами Excel и печатью PDF. BotPlus RT объединяет MCP-мост, перенос Archicad → Revit, отверстия, марки и расчёт теплопотерь. BotPlus Maps, PDF Editor и SynologyPhotoSync дополняют набор инструментами для карт, документов и фотомедиатек.",
    ],
    faqTitle: "Вопросы о BOTPLUS",
    faq: [
      ["Какие плагины BOTPLUS есть для AutoCAD и Revit?", "BotPlus AT предназначен для AutoCAD 2025–2027 на Windows x64. BotPlus RT работает с Revit 2026 и включает MCP, Ac2Revit, инструменты ОВ, отверстий и марок. У каждого проекта есть отдельная страница с возможностями и ссылками на установку."],
      ["Что такое MCP для Revit?", "Model Context Protocol связывает AI-клиент с инструментами приложения. Локальный MCP-мост BotPlus RT даёт клиенту доступ к модели Revit, видам, листам, спецификациям и ресурсам проекта. Режим подтверждения изменений задаётся в Revit."],
      ["Какие приложения доступны для macOS?", "BotPlus PDF Editor предназначен для работы с PDF на macOS 14 и новее. SynologyPhotoSync переносит доступные оригиналы из Apple Photos в Synology Photos и работает на macOS 13 и новее с Apple Silicon."],
      ["Где найти исходники, документацию и новости?", "Исходный код и руководства доступны в репозиториях Davud77 на GitHub. Канал BOTPLUS в Telegram — @botplusru."],
    ],
    faqLabel: "Вопросы и ответы",
    overviewLabel: "О проекте",
    mcpLink: "Возможности MCP для Revit",
    telegramLabel: "Канал BOTPLUS в Telegram",
    telegramTitle: "BOTPLUS в Telegram",
    telegramText: "Канал проекта, обновления и связь с BOTPLUS.",
    themeDark: "Включить тёмную тему",
    themeLight: "Включить светлую тему",
  },
  en: {
    title: "BOTPLUS — AutoCAD & Revit add-ins, BIM MCP, PDF for Mac",
    description: "AutoCAD and Revit add-ins, an MCP bridge for BIM automation, self-hosted maps, a PDF editor for Mac, and Synology photo sync. Features, setup, and source code.",
    about: "Tools for design work and your data",
    paragraphs: [
      "BOTPLUS brings together tools for AutoCAD drawing production, Revit BIM workflows, and everyday tasks on Mac. Explore each project by use case, check compatibility, and find its documentation and setup instructions.",
      "BotPlus AT covers DWG annotations, Excel tables, and PDF plotting. BotPlus RT combines an MCP bridge, Archicad-to-Revit transfer, openings, tags, and heat-loss calculations. BotPlus Maps, PDF Editor, and SynologyPhotoSync extend the collection to mapping, documents, and photo libraries.",
    ],
    faqTitle: "Questions about BOTPLUS",
    faq: [
      ["Which AutoCAD and Revit add-ins does BOTPLUS offer?", "BotPlus AT supports AutoCAD 2025–2027 on Windows x64. BotPlus RT runs in Revit 2026 and includes MCP, Ac2Revit, heating tools, openings, and tags. Each project page covers features and installation."],
      ["What is MCP for Revit?", "Model Context Protocol connects an AI client to application tools. The local BotPlus RT bridge gives the client access to the Revit model, views, sheets, schedules, and project resources. Change confirmation is configured inside Revit."],
      ["Which apps run on macOS?", "BotPlus PDF Editor works with PDF documents on macOS 14 and later. SynologyPhotoSync transfers available originals from Apple Photos to Synology Photos and runs on macOS 13 and later with Apple Silicon."],
      ["Where can I find the source code, guides, and news?", "Source code and documentation are available in the Davud77 repositories on GitHub. The BOTPLUS Telegram channel is @botplusru."],
    ],
    faqLabel: "Questions and answers",
    overviewLabel: "About the project",
    mcpLink: "Explore MCP for Revit",
    telegramLabel: "BOTPLUS Telegram channel",
    telegramTitle: "BOTPLUS on Telegram",
    telegramText: "Follow the project and connect with BOTPLUS.",
    themeDark: "Switch to dark theme",
    themeLight: "Switch to light theme",
  },
};

export const projectSearch = {
  "bp-autocad-tools": {
    category: "DesignApplication",
    os: "Windows x64",
    ru: {
      title: "Плагин AutoCAD BotPlus AT — нумерация, Excel и печать PDF",
      overview: [
        "BotPlus AT — набор инструментов для AutoCAD 2025–2027, который помогает подготовить DWG к выпуску. Он объединяет оформление, работу с геометрией и таблицами, очистку чертежей и пакетную печать на одной вкладке AutoCAD.",
        "Для повторяющихся задач доступны нумерация текста и атрибутов, копирование с нумерацией, выбор объектов по свойствам и подсчёт длин и площадей. Таблицы можно передать в Excel и вернуть в чертёж после редактирования. Инструменты выпуска работают с форматками и порядком листов.",
      ],
      faq: [
        ["С какими версиями AutoCAD работает BotPlus AT?", "Надстройка предназначена для AutoCAD 2025–2027 под Windows x64. Установщик выбирает библиотеку для соответствующей версии AutoCAD."],
        ["Можно ли редактировать таблицы AutoCAD в Excel?", "Да. Таблицу можно выгрузить в XLSX, изменить в Excel и импортировать обратно. Доступны отдельные команды экспорта и импорта."],
        ["Где скачать плагин для AutoCAD?", "Установщики и архивы BotPlus AT публикуются в GitHub Releases репозитория bp-autocad-tools. Перед установкой закройте AutoCAD и Core Console."],
      ],
    },
    en: {
      title: "BotPlus AT AutoCAD add-in — numbering, Excel & PDF plotting",
      overview: [
        "BotPlus AT is a toolkit for AutoCAD 2025–2027 that helps prepare DWG drawings for delivery. It brings annotations, geometry and table tools, drawing cleanup, and batch plotting into a single ribbon tab.",
        "Repeatable tasks include text and attribute numbering, numbered copies, selection by properties, and length and area calculations. Exchange tables with Excel, then import the edited data back into your drawing. Production tools use drawing frames and sheet order to prepare PDF sets.",
      ],
      faq: [
        ["Which AutoCAD versions does BotPlus AT support?", "The add-in targets AutoCAD 2025–2027 on Windows x64. The installer selects the library for your AutoCAD version."],
        ["Can I edit AutoCAD tables in Excel?", "Yes. Export a table to XLSX, edit it in Excel, and import it back. Separate export and import commands are also available."],
        ["Where can I download the AutoCAD add-in?", "Installers and archives are published in GitHub Releases for bp-autocad-tools. Close AutoCAD and Core Console before installation."],
      ],
    },
  },
  "bp-revit-tools": {
    category: "DesignApplication",
    os: "Windows x64",
    ru: {
      title: "BotPlus RT — MCP для Revit 2026, Archicad, отверстия и ОВ",
      description: "BotPlus RT для Revit 2026. MCP-мост со 151 зарегистрированной командой, перенос Archicad через IFC и JSON, отверстия, марки и расчёт теплопотерь.",
      overview: [
        "BotPlus RT — модульная надстройка для Autodesk Revit 2026. Она объединяет доступ AI-клиентов через MCP, перенос из Archicad, инженерные инструменты ОВ, координацию отверстий и работу с марками. Все модули устанавливаются одним EXE, а их состав выбирается в настройках.",
        "Набор рассчитан на работу с BIM-моделью от обмена исходными данными до оформления и координации. Ac2Revit использует JSON и IFC, модуль отверстий ведёт реестр заданий, а инструменты ОВ экспортируют помещения и ограждения для просмотра и расчёта теплопотерь.",
      ],
      mcp: {
        heading: "MCP для Revit с каталогом из 151 команды",
        intro: "Локальный MCP-мост BotPlus RT связывает AI-клиент с открытым проектом Revit через Model Context Protocol. Это единая точка доступа к данным модели и проектным операциям внутри набора BotPlus RT.",
        evidence: "В исходном коде зарегистрирована 151 команда MCP, включая отдельные команды предпросмотра и применения. Базовый набор из 100 команд проверен через Code Mode в Revit 2026. Данные приведены по каталогу проекта от 10 ноября 2026 года.",
        sourceLabel: "Каталог MCP и результаты проверок",
        sections: [
          ["Модель и данные проекта", "AI-клиент получает доступ к модели, видам, листам, спецификациям и ресурсам проекта. Это позволяет строить сценарии на основе текущих данных Revit."],
          ["Подключение на ленте Revit", "Кнопка MCP показывает состояние моста, подключает AI-клиента и помогает восстановить соединение. Настройки доступны непосредственно в рабочем приложении."],
          ["Предпросмотр и применение", "Изменения проходят через preview и apply с planId. При выключенном автоподтверждении запись требует подтверждения в Revit. Режим выбирается пользователем на панели MCP."],
        ],
      },
      faq: [
        ["Для какой версии Revit предназначен BotPlus RT?", "Надстройка предназначена для Autodesk Revit 2026 x64 под Windows. Состав модулей выбирается в BotPlus RT → Настройки → Модули."],
        ["Что умеет MCP-мост BotPlus RT?", "Мост предоставляет AI-клиенту доступ к модели, видам, листам, спецификациям и ресурсам проекта Revit. Панель MCP управляет подключением и подтверждением операций записи."],
        ["Что нужно для переноса Archicad в Revit?", "Нужны открытый проект Archicad и расширение Tapir. Ac2Revit использует JSON, IFC или их сочетание. Доступность геометрии и параметров зависит от исходной модели и адаптера."],
      ],
    },
    en: {
      title: "BotPlus RT — Revit 2026 MCP, Archicad, openings & heating",
      description: "BotPlus RT for Revit 2026. An MCP bridge with 151 registered commands, Archicad transfer via IFC and JSON, opening coordination, tags, and heat-loss tools.",
      overview: [
        "BotPlus RT is a modular add-in for Autodesk Revit 2026. It combines AI access through MCP, Archicad transfer, heating tools, opening coordination, and tag workflows. A single EXE installs the modules, and Settings lets you choose which ones to load.",
        "The toolkit spans BIM workflows from data exchange to annotation and coordination. Ac2Revit uses JSON and IFC, the openings module maintains a task register, and heating tools export rooms and envelope elements for visualization and heat-loss calculations.",
      ],
      mcp: {
        heading: "MCP for Revit with a catalogue of 151 commands",
        intro: "The local BotPlus RT MCP bridge connects an AI client to the open Revit project through Model Context Protocol. It provides a single connection for model data and project operations within BotPlus RT.",
        evidence: "The source code registers 151 MCP commands, counting preview and apply commands separately. The base set of 100 commands was tested through Code Mode in Revit 2026. Figures follow the project catalogue dated November 10, 2026.",
        sourceLabel: "MCP catalogue and validation results",
        sections: [
          ["Model and project data", "The AI client can access the model, views, sheets, schedules, and project resources, enabling workflows based on current Revit data."],
          ["Connection inside Revit", "The MCP ribbon button shows bridge status, connects an AI client, and helps restore the connection. Settings are available directly in Revit."],
          ["Preview and apply", "Changes use preview and apply commands with a planId. With auto-confirmation disabled, writes require approval in Revit. The user selects the mode on the MCP panel."],
        ],
      },
      faq: [
        ["Which Revit version does BotPlus RT support?", "The add-in targets Autodesk Revit 2026 x64 on Windows. Choose the modules under BotPlus RT → Settings → Modules."],
        ["What does the BotPlus RT MCP bridge do?", "It gives an AI client access to the Revit model, views, sheets, schedules, and project resources. The MCP panel controls connections and confirmation of write operations."],
        ["What is required to transfer Archicad to Revit?", "You need an open Archicad project and Tapir. Ac2Revit uses JSON, IFC, or both. Geometry and parameter coverage depend on the source model and adapter."],
      ],
    },
  },
  "bp-maps": {
    category: "BusinessApplication",
    os: "Web browser",
    ru: {
      title: "BotPlus Maps — геоплатформа для ортофото, панорам и GIS",
      overview: [
        "BotPlus Maps — веб-платформа для работы с геоданными на собственном сервере. Она объединяет ортофотопланы, фотографии, панорамы 360° и векторные слои в сохраняемые карты с отдельной опубликованной версией.",
        "Исходники можно хранить на локальном диске или NAS. Подготовка COG и тайлов помогает показывать растры в браузере, а PostgreSQL и PostGIS используются для векторных данных. Доступ к рабочему пространству и опубликованным картам настраивается отдельно.",
      ],
      faq: [
        ["Можно ли развернуть BotPlus Maps на своём сервере?", "Да. Проект предназначен для самостоятельного размещения. Локальный запуск описан в README и использует Docker с Compose v2."],
        ["Какие данные поддерживает геоплатформа?", "Ортофотопланы, фотографии, панорамы 360° и векторные слои. Растры подготавливаются для показа в браузере, а векторные данные работают через PostgreSQL и PostGIS."],
        ["Можно ли опубликовать карту по ссылке?", "Да. Сохранённая карта может иметь отдельную опубликованную версию с выбранными слоями. Операции изменения и доступ к каталогу требуют входа."],
      ],
    },
    en: {
      title: "BotPlus Maps — self-hosted orthophotos, panoramas & GIS",
      overview: [
        "BotPlus Maps is a self-hosted web platform for geospatial data. Combine orthophotos, photos, 360° panoramas, and vector layers into saved maps with separate published versions.",
        "Keep source files on local disks or NAS. COG preparation and tiles enable browser display of rasters, while PostgreSQL and PostGIS support vector data. Workspace access and map publishing are configured separately.",
      ],
      faq: [
        ["Can I host BotPlus Maps on my own server?", "Yes. The project is designed for self-hosting. The README documents local deployment with Docker and Compose v2."],
        ["Which geospatial data does it support?", "Orthophotos, photos, 360° panoramas, and vector layers. Rasters are prepared for browser display, and vectors use PostgreSQL and PostGIS."],
        ["Can I publish a map by URL?", "Yes. A saved map can have a separate published version with selected layers. Editing and catalogue access require authentication."],
      ],
    },
  },
  "bp-pdf-editor": {
    category: "ProductivityApplication",
    os: "macOS 14 or later",
    ru: {
      title: "BotPlus PDF Editor — редактор PDF для Mac, текст и OCR",
      overview: [
        "BotPlus PDF Editor — нативное приложение для работы с PDF на Mac с Apple Silicon и Intel. Ленточный интерфейс объединяет просмотр документов, редактирование исходного текста, аннотации и операции со страницами.",
        "Документы открываются во вкладках, боковые панели помогают ориентироваться по миниатюрам и свойствам. Для поиска по сканам доступно отдельное OCR. Интерфейс построен на SwiftUI и AppKit, просмотр использует PDFKit, а изменение содержимого — встроенный PDFium.",
      ],
      faq: [
        ["Какие Mac поддерживает PDF-редактор?", "BotPlus PDF Editor предназначен для macOS 14 и новее. Универсальная сборка поддерживает Apple Silicon и Intel."],
        ["Можно ли изменить исходный текст PDF?", "Да. Редактор позволяет изменять существующий текст PDF блоками и добавлять новый текст. Работа с содержимым выполняется встроенным PDFium."],
        ["Поддерживаются ли сканы и распознавание текста?", "Для сканов доступна отдельная команда OCR. Обычный текстовый поиск работает по текстовому слою документа."],
      ],
    },
    en: {
      title: "BotPlus PDF Editor for Mac — text editing, annotations & OCR",
      overview: [
        "BotPlus PDF Editor is a native PDF app for Apple Silicon and Intel Macs. Its ribbon interface combines document viewing, original-text editing, annotations, and page operations.",
        "Open documents in tabs and use side panels for thumbnails and properties. A separate OCR command enables text recognition in scans. The interface uses SwiftUI and AppKit, PDFKit provides viewing, and the embedded PDFium engine edits content.",
      ],
      faq: [
        ["Which Macs does the PDF editor support?", "BotPlus PDF Editor requires macOS 14 or later. The universal build supports Apple Silicon and Intel."],
        ["Can I edit original PDF text?", "Yes. Edit existing PDF text blocks or add new text. The app uses its built-in PDFium engine for content editing."],
        ["Does it support scanned PDFs and OCR?", "A separate OCR command recognizes text in scans. Standard text search uses the document’s text layer."],
      ],
    },
  },
  "bp-icloud2syno": {
    category: "UtilitiesApplication",
    os: "macOS 13 or later, Apple Silicon",
    ru: {
      title: "SynologyPhotoSync — фото из Apple Photos в Synology Photos",
      overview: [
        "SynologyPhotoSync — приложение для переноса фото и видео из Apple Photos в Synology Photos. Оно извлекает доступные через PhotoKit оригиналы, включая обе части Live Photo, и отправляет их на NAS без перекодирования.",
        "В настройках выбираются источник, диапазон дат, пространство Synology Photos и параметры альбомов. Прогресс доступен в строке меню macOS, а число параллельных загрузок можно настроить перед синхронизацией.",
      ],
      faq: [
        ["Можно ли перенести фотографии из iCloud в Synology Photos?", "Приложение работает через медиатеку Apple Photos и получает доступные PhotoKit оригиналы, в том числе материалы из iCloud. Для выгрузки нужны доступ к медиатеке и подключение к Synology Photos."],
        ["Сохраняется ли качество фотографий и Live Photos?", "Оригиналы передаются без перекодирования. Для Live Photo поддерживаются фото и связанный видеофайл."],
        ["На каких устройствах работает SynologyPhotoSync?", "Приложение предназначено для macOS 13 и новее на Apple Silicon. Для подключения указывается HTTPS-адрес DSM."],
      ],
    },
    en: {
      title: "SynologyPhotoSync — Apple Photos to Synology Photos",
      overview: [
        "SynologyPhotoSync transfers photos and videos from Apple Photos to Synology Photos. It retrieves originals available through PhotoKit, including both parts of a Live Photo, and uploads them to your NAS without re-encoding.",
        "Choose a source, date range, destination space, and album settings. Track progress in the macOS menu bar and configure the number of parallel uploads before starting synchronization.",
      ],
      faq: [
        ["Can I transfer iCloud photos to Synology Photos?", "The app works through the Apple Photos library and retrieves originals available through PhotoKit, including iCloud media. It requires library access and a connection to Synology Photos."],
        ["Are original quality and Live Photos preserved?", "Original files are transferred without re-encoding. Live Photo support includes the still image and its paired video."],
        ["Which devices support SynologyPhotoSync?", "The app runs on macOS 13 or later with Apple Silicon. Connections use the DSM HTTPS address."],
      ],
    },
  },
};
