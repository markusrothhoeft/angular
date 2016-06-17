'use strict';"use strict";
var browser_common_1 = require('angular2/src/platform/browser_common');
exports.BROWSER_PROVIDERS = browser_common_1.BROWSER_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS = browser_common_1.ELEMENT_PROBE_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = browser_common_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
exports.inspectNativeElement = browser_common_1.inspectNativeElement;
exports.BrowserDomAdapter = browser_common_1.BrowserDomAdapter;
exports.By = browser_common_1.By;
exports.Title = browser_common_1.Title;
exports.enableDebugTools = browser_common_1.enableDebugTools;
exports.disableDebugTools = browser_common_1.disableDebugTools;
var lang_1 = require('angular2/src/facade/lang');
var browser_common_2 = require('angular2/src/platform/browser_common');
var core_1 = require('angular2/core');
var application_ref_1 = require('angular2/src/core/application_ref');
var reflection_1 = require('angular2/src/core/reflection/reflection');
var reflector_reader_1 = require('angular2/src/core/reflection/reflector_reader');
var testability_1 = require('angular2/src/core/testability/testability');
var console_1 = require('angular2/src/core/console');
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
exports.BROWSER_APP_PROVIDERS = lang_1.CONST_EXPR([browser_common_2.BROWSER_APP_COMMON_PROVIDERS]);
function browserStaticPlatform() {
    if (lang_1.isBlank(core_1.getPlatform())) {
        var tokens = new Map();
        var platform = new application_ref_1.PlatformRef_();
        tokens.set(core_1.PlatformRef, platform);
        tokens.set(application_ref_1.PlatformRef_, platform);
        tokens.set(reflection_1.Reflector, reflection_1.reflector);
        tokens.set(reflector_reader_1.ReflectorReader, reflection_1.reflector);
        var testabilityRegistry = new testability_1.TestabilityRegistry();
        tokens.set(testability_1.TestabilityRegistry, testabilityRegistry);
        tokens.set(console_1.Console, new console_1.Console());
        tokens.set(browser_common_2.BROWSER_PLATFORM_MARKER, true);
        tokens.set(core_1.PLATFORM_INITIALIZER, [browser_common_2.createInitDomAdapter(testabilityRegistry)]);
        core_1.createPlatform(new core_1.MapInjector(null, tokens));
    }
    return core_1.assertPlatform(browser_common_2.BROWSER_PLATFORM_MARKER);
}
exports.browserStaticPlatform = browserStaticPlatform;
/**
 * See {@link bootstrap} for more information.
 */
function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (lang_1.isPresent(initReflector)) {
        initReflector();
    }
    var appProviders = lang_1.isPresent(customProviders) ? [exports.BROWSER_APP_PROVIDERS, customProviders] : exports.BROWSER_APP_PROVIDERS;
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate(appProviders, browserStaticPlatform().injector);
    return core_1.coreLoadAndBootstrap(appInjector, appComponentType);
}
exports.bootstrapStatic = bootstrapStatic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWlnQTJzY21hLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsK0JBVU8sc0NBQXNDLENBQUM7QUFUNUMsK0RBQWlCO0FBQ2pCLDJFQUF1QjtBQUN2QiwrRkFBaUM7QUFDakMscUVBQW9CO0FBQ3BCLCtEQUFpQjtBQUNqQixpQ0FBRTtBQUNGLHVDQUFLO0FBQ0wsNkRBQWdCO0FBQ2hCLCtEQUM0QztBQUU5QyxxQkFBbUQsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RSwrQkFJTyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzlDLHFCQVVPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLGdDQUEyQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQy9ELDJCQUFtQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzdFLGlDQUE4QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBQzlFLDRCQUFrQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzlFLHdCQUFzQiwyQkFBMkIsQ0FBQyxDQUFBO0FBRWxEOzs7O0dBSUc7QUFDVSw2QkFBcUIsR0FDOUIsaUJBQVUsQ0FBQyxDQUFDLDZDQUE0QixDQUFDLENBQUMsQ0FBQztBQUUvQztJQUNFLEVBQUUsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxrQkFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQVksQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLDhCQUFZLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw4QkFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQVMsRUFBRSxzQkFBUyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQ0FBZSxFQUFFLHNCQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFJLG1CQUFtQixHQUFHLElBQUksaUNBQW1CLEVBQUUsQ0FBQztRQUNwRCxNQUFNLENBQUMsR0FBRyxDQUFDLGlDQUFtQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxFQUFFLElBQUksaUJBQU8sRUFBRSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3Q0FBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLDJCQUFvQixFQUFFLENBQUMscUNBQW9CLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUscUJBQWMsQ0FBQyxJQUFJLGtCQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxxQkFBYyxDQUFDLHdDQUF1QixDQUFDLENBQUM7QUFDakQsQ0FBQztBQWhCZSw2QkFBcUIsd0JBZ0JwQyxDQUFBO0FBRUQ7O0dBRUc7QUFDSCx5QkFBZ0MsZ0JBQXNCLEVBQ3RCLGVBQXdELEVBQ3hELGFBQXdCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGFBQWEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLFlBQVksR0FDWixnQkFBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsNkJBQXFCLEVBQUUsZUFBZSxDQUFDLEdBQUcsNkJBQXFCLENBQUM7SUFDbEcsSUFBSSxXQUFXLEdBQ1gseUJBQWtCLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEYsTUFBTSxDQUFDLDJCQUFvQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFaZSx1QkFBZSxrQkFZOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2FuZ3VsYXJfZW50cnlwb2ludCc7XG5leHBvcnQge1xuICBCUk9XU0VSX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXG4gIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTX1BST0RfTU9ERSxcbiAgaW5zcGVjdE5hdGl2ZUVsZW1lbnQsXG4gIEJyb3dzZXJEb21BZGFwdGVyLFxuICBCeSxcbiAgVGl0bGUsXG4gIGVuYWJsZURlYnVnVG9vbHMsXG4gIGRpc2FibGVEZWJ1Z1Rvb2xzXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5cbmltcG9ydCB7VHlwZSwgaXNQcmVzZW50LCBpc0JsYW5rLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtcbiAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9QTEFURk9STV9NQVJLRVIsXG4gIGNyZWF0ZUluaXREb21BZGFwdGVyXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIGNvcmVMb2FkQW5kQm9vdHN0cmFwLFxuICBSZWZsZWN0aXZlSW5qZWN0b3IsXG4gIFBsYXRmb3JtUmVmLFxuICBnZXRQbGF0Zm9ybSxcbiAgY3JlYXRlUGxhdGZvcm0sXG4gIGFzc2VydFBsYXRmb3JtLFxuICBQTEFURk9STV9JTklUSUFMSVpFUixcbiAgTWFwSW5qZWN0b3Jcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7UGxhdGZvcm1SZWZffSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9hcHBsaWNhdGlvbl9yZWYnO1xuaW1wb3J0IHtSZWZsZWN0b3IsIHJlZmxlY3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvcmVmbGVjdGlvbi9yZWZsZWN0aW9uJztcbmltcG9ydCB7UmVmbGVjdG9yUmVhZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rvcl9yZWFkZXInO1xuaW1wb3J0IHtUZXN0YWJpbGl0eVJlZ2lzdHJ5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5pbXBvcnQge0NvbnNvbGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NvbnNvbGUnO1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIHByb3ZpZGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgaW50byBgYXBwbGljYXRpb24oKWAgd2hlbiBib290c3RyYXBwaW5nIGEgY29tcG9uZW50XG4gKiB3aGVuIGFsbCB0ZW1wbGF0ZXNcbiAqIGhhdmUgYmVlbiBwcmVjb21waWxlZCBvZmZsaW5lLlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9BUFBfUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSU10pO1xuXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlclN0YXRpY1BsYXRmb3JtKCk6IFBsYXRmb3JtUmVmIHtcbiAgaWYgKGlzQmxhbmsoZ2V0UGxhdGZvcm0oKSkpIHtcbiAgICB2YXIgdG9rZW5zID0gbmV3IE1hcDxhbnksIGFueT4oKTtcbiAgICB2YXIgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm1SZWZfKCk7XG4gICAgdG9rZW5zLnNldChQbGF0Zm9ybVJlZiwgcGxhdGZvcm0pO1xuICAgIHRva2Vucy5zZXQoUGxhdGZvcm1SZWZfLCBwbGF0Zm9ybSk7XG4gICAgdG9rZW5zLnNldChSZWZsZWN0b3IsIHJlZmxlY3Rvcik7XG4gICAgdG9rZW5zLnNldChSZWZsZWN0b3JSZWFkZXIsIHJlZmxlY3Rvcik7XG4gICAgdmFyIHRlc3RhYmlsaXR5UmVnaXN0cnkgPSBuZXcgVGVzdGFiaWxpdHlSZWdpc3RyeSgpO1xuICAgIHRva2Vucy5zZXQoVGVzdGFiaWxpdHlSZWdpc3RyeSwgdGVzdGFiaWxpdHlSZWdpc3RyeSk7XG4gICAgdG9rZW5zLnNldChDb25zb2xlLCBuZXcgQ29uc29sZSgpKTtcbiAgICB0b2tlbnMuc2V0KEJST1dTRVJfUExBVEZPUk1fTUFSS0VSLCB0cnVlKTtcbiAgICB0b2tlbnMuc2V0KFBMQVRGT1JNX0lOSVRJQUxJWkVSLCBbY3JlYXRlSW5pdERvbUFkYXB0ZXIodGVzdGFiaWxpdHlSZWdpc3RyeSldKTtcbiAgICBjcmVhdGVQbGF0Zm9ybShuZXcgTWFwSW5qZWN0b3IobnVsbCwgdG9rZW5zKSk7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFBsYXRmb3JtKEJST1dTRVJfUExBVEZPUk1fTUFSS0VSKTtcbn1cblxuLyoqXG4gKiBTZWUge0BsaW5rIGJvb3RzdHJhcH0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXBTdGF0aWMoYXBwQ29tcG9uZW50VHlwZTogVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tUHJvdmlkZXJzPzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRSZWZsZWN0b3I/OiBGdW5jdGlvbik6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XG4gIGlmIChpc1ByZXNlbnQoaW5pdFJlZmxlY3RvcikpIHtcbiAgICBpbml0UmVmbGVjdG9yKCk7XG4gIH1cblxuICBsZXQgYXBwUHJvdmlkZXJzID1cbiAgICAgIGlzUHJlc2VudChjdXN0b21Qcm92aWRlcnMpID8gW0JST1dTRVJfQVBQX1BST1ZJREVSUywgY3VzdG9tUHJvdmlkZXJzXSA6IEJST1dTRVJfQVBQX1BST1ZJREVSUztcbiAgdmFyIGFwcEluamVjdG9yID1cbiAgICAgIFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKGFwcFByb3ZpZGVycywgYnJvd3NlclN0YXRpY1BsYXRmb3JtKCkuaW5qZWN0b3IpO1xuICByZXR1cm4gY29yZUxvYWRBbmRCb290c3RyYXAoYXBwSW5qZWN0b3IsIGFwcENvbXBvbmVudFR5cGUpO1xufVxuIl19