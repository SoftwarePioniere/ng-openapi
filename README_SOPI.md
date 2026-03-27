
# Update and Publish SOPI Packages


## neue Versionsnummern

Um eine neue Version zu deployen, muss die Version in der `package.json` Datei angepasst werden. 

Diese befindet sich für @sopi/ng-openapi im Ordner `packages/ng-openapi`.
[package.json](packages/ng-openapi/package.json)

Diese befindet sich für @sopi/ng-openapi-zod im Ordner `packages/plugins/zod`.
[package.json](packages/plugins/zod/package.json)

Diese befindet sich für @sopi/ng-openapi-http-resource im Ordner `packages/plugins/http-ressource`.
[package.json](packages/plugins/http-resource/package.json)

Diese befindet sich für @sopi/ng-openapi-shared im Ordner `packages/shared`.
[package.json](packages/shared/package.json)

## Build and Publish
Nach der Anpassung der Versionen können die Pakete über nx gebildet werden 

Targets => build => ng-openapi, ng-openapi-zod, ng-openapi-http-resource, ng-openapi-shared

und anschließend mit nx unter Targets => nx-release-publish veröffentlicht werden. 


