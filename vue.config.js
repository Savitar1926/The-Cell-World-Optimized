module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "News App",
                appId: 'test.com',
                win: {
                    "target": [
                        "nsis"
                    ],
                    icon: 'public/svg.png',
                    "requestedExecutionLevel": "requireAdministrator"
                },
                "nsis": {
                    "installerIcon": "public/favicon.ico",
                    "uninstallerIcon": "public/favicon.ico",
                    "uninstallDisplayName": "CPU Monitor",
                    "license": "license.txt",
                    "oneClick": false,
                    "allowToChangeInstallationDirectory": true
                }
            },
        },
    },
}