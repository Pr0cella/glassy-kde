var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "textDateFontFamily": "Lato,10,-1,0,50,0,0,0,0,0,Regular",
                            "textTimeFontFamily": "Lato,10,-1,0,50,0,0,0,0,0,Regular"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.fancyclock",
                    "title": "Fancy Clock"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "forecastFontSize": "14",
                            "minMaxFontSize": "16",
                            "outlineColor": "#8a8a8a",
                            "source": "wettercom|weather|Kassel, Hessen, DE|DE0005331;Kassel",
                            "textColor": "#caced7"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "com.github.zren.simpleweather",
                    "title": "Simple Weather"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "color": "translucent-light",
                            "noteId": "7168813e-2cf7-4e93-99b8-6a4545a73e"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.notes",
                    "title": "Notes"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "Applet-4:1488,16,240,96,0;Applet-3:1728,16,176,192,0;Applet-10:1664,272,208,256,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "665",
                    "DialogWidth": "1264"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1859",
                    "ToolBoxButtonY": "202",
                    "positions": "1,17,desktop:/round.png,0,3,desktop:/Glassy.tar.gz,0,2,desktop:/Sweet,0,1,desktop:/Glassy,0,0,desktop:/org.kde.plasma.desktop-layout.js,0,5,desktop:/sharp.png,0,4",
                    "pressToMoveHelp": "false",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/com.darkeye.animatedImage/General": {
                    "Blur": "true",
                    "BlurRadius": "47",
                    "DayNightEffect": "0.3",
                    "FillMode": "2",
                    "Image": "file:///home/pr0cella/Pictures/Wallpaper/pillarhd.png",
                    "Speed": "3"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Blur": "true",
                    "Image": "file:///home/pr0cella/.local/share/wallpapers/No Logo QAT 02.png"
                },
                "/Wallpaper/org.kde.plasma.worldmap/General": {
                    "centerMode": "Longitude",
                    "projection": "Mercator"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "FillMode": "2",
                    "Provider": "bing"
                },
                "/Wallpaper/org.kde.video/General": {
                    "Folder": "file:///home/pr0cella/Desktop/",
                    "Video": "file:///home/pr0cella/Desktop/Pillars of Eternity - Living Adra [2560x1440].mp4",
                    "Volume": "0"
                },
                "/Wallpaper/smartvideowallpaper/General": {
                    "VideoWallpaperBackgroundVideo": "file:///home/pr0cella/Desktop/Pillars of Eternity - Living Adra [2560x1440].mp4",
                    "checkedBusyPlay": "false",
                    "checkedSmartPlay": "true"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "top",
                    "ToolBoxButtonX": "100",
                    "pressToMoveHelp": "false",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/pr0cella/.local/share/wallpapers/No Logo QAT 02.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "customButtonImage": "org.kde.archUpdate",
                            "favoriteSystemActions": "shutdown",
                            "favoritesPortedToKAstats": "true",
                            "showIconsRootLevel": "true",
                            "showRecentApps": "false",
                            "showRecentDocs": "false",
                            "useCustomButtonImage": "true"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "org.kde.archUpdate",
                            "favoriteSystemActions": "shutdown",
                            "favoritesPortedToKAstats": "true",
                            "showIconsRootLevel": "true",
                            "showRecentApps": "false",
                            "showRecentDocs": "false",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "18"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "18"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.clipboard"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "60",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "2"
                        },
                        "/Configuration/Configuration/General": {
                            "history": "#485058,#585858,#ffffff,#4373ad,#c3c7d1,#171a22,#1c2832,#1a2831,#3d3d3e"
                        },
                        "/Configuration/General": {
                            "history": "#485058\\,#585858\\,#ffffff\\,#4373ad\\,#c3c7d1\\,#171a22\\,#1c2832\\,#1a2831\\,#3d3d3e"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "length": "99"
                        },
                        "/Configuration/General": {
                            "length": "99"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "noWindowText": "",
                            "noWindowType": "text",
                            "showApplicationIcon": "true",
                            "textType": "1"
                        },
                        "/Configuration/General": {
                            "noWindowText": "",
                            "showApplicationIcon": "true",
                            "textType": "1"
                        }
                    },
                    "plugin": "org.communia.apptitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "length": "134"
                        },
                        "/Configuration/General": {
                            "length": "134"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "boldText": "true",
                            "customDateFormat": "ddd d y"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "boldText": "true",
                            "customDateFormat": "ddd d y"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "324"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "324"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "18"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "18"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "sources": "mem%2Fphysical%2Fapplication"
                        },
                        "/Configuration/General": {
                            "sources": "mem%2Fphysical%2Fapplication"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.memory"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "17"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "17"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "currentDesktopSelected": "ShowDesktop",
                            "displayedText": "Number"
                        },
                        "/Configuration/General": {
                            "displayedText": "Number"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "3"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "3"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.2222222222222223,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
