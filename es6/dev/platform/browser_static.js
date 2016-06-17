export * from 'angular2/src/core/angular_entrypoint';
export { BROWSER_PROVIDERS, ELEMENT_PROBE_PROVIDERS, ELEMENT_PROBE_PROVIDERS_PROD_MODE, inspectNativeElement, BrowserDomAdapter, By, Title, enableDebugTools, disableDebugTools } from 'angular2/src/platform/browser_common';
import { isPresent, isBlank, CONST_EXPR } from 'angular2/src/facade/lang';
import { BROWSER_APP_COMMON_PROVIDERS, BROWSER_PLATFORM_MARKER, createInitDomAdapter } from 'angular2/src/platform/browser_common';
import { coreLoadAndBootstrap, ReflectiveInjector, PlatformRef, getPlatform, createPlatform, assertPlatform, PLATFORM_INITIALIZER, MapInjector } from 'angular2/core';
import { PlatformRef_ } from 'angular2/src/core/application_ref';
import { Reflector, reflector } from 'angular2/src/core/reflection/reflection';
import { ReflectorReader } from 'angular2/src/core/reflection/reflector_reader';
import { TestabilityRegistry } from 'angular2/src/core/testability/testability';
import { Console } from 'angular2/src/core/console';
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
export const BROWSER_APP_PROVIDERS = CONST_EXPR([BROWSER_APP_COMMON_PROVIDERS]);
export function browserStaticPlatform() {
    if (isBlank(getPlatform())) {
        var tokens = new Map();
        var platform = new PlatformRef_();
        tokens.set(PlatformRef, platform);
        tokens.set(PlatformRef_, platform);
        tokens.set(Reflector, reflector);
        tokens.set(ReflectorReader, reflector);
        var testabilityRegistry = new TestabilityRegistry();
        tokens.set(TestabilityRegistry, testabilityRegistry);
        tokens.set(Console, new Console());
        tokens.set(BROWSER_PLATFORM_MARKER, true);
        tokens.set(PLATFORM_INITIALIZER, [createInitDomAdapter(testabilityRegistry)]);
        createPlatform(new MapInjector(null, tokens));
    }
    return assertPlatform(BROWSER_PLATFORM_MARKER);
}
/**
 * See {@link bootstrap} for more information.
 */
export function bootstrapStatic(appComponentType, customProviders, initReflector) {
    if (isPresent(initReflector)) {
        initReflector();
    }
    let appProviders = isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
    var appInjector = ReflectiveInjector.resolveAndCreate(appProviders, browserStaticPlatform().injector);
    return coreLoadAndBootstrap(appInjector, appComponentType);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWh0RnRLWkhqLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyX3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLHNDQUFzQyxDQUFDO0FBQ3JELFNBQ0UsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQ0FBaUMsRUFDakMsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixFQUFFLEVBQ0YsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixpQkFBaUIsUUFDWixzQ0FBc0MsQ0FBQztPQUV2QyxFQUFPLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO09BQ3RFLEVBQ0wsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDckIsTUFBTSxzQ0FBc0M7T0FDdEMsRUFFTCxvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsY0FBYyxFQUNkLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsV0FBVyxFQUNaLE1BQU0sZUFBZTtPQUVmLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUNBQW1DO09BQ3ZELEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLHlDQUF5QztPQUNyRSxFQUFDLGVBQWUsRUFBQyxNQUFNLCtDQUErQztPQUN0RSxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkNBQTJDO09BQ3RFLEVBQUMsT0FBTyxFQUFDLE1BQU0sMkJBQTJCO0FBRWpEOzs7O0dBSUc7QUFDSCxPQUFPLE1BQU0scUJBQXFCLEdBQzlCLFVBQVUsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztBQUUvQztJQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBWSxDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSxjQUFjLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxnQ0FBZ0MsZ0JBQXNCLEVBQ3RCLGVBQXdELEVBQ3hELGFBQXdCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsYUFBYSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksWUFBWSxHQUNaLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxHQUFHLHFCQUFxQixDQUFDO0lBQ2xHLElBQUksV0FBVyxHQUNYLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYW5ndWxhcl9lbnRyeXBvaW50JztcbmV4cG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfUFJPRF9NT0RFLFxuICBpbnNwZWN0TmF0aXZlRWxlbWVudCxcbiAgQnJvd3NlckRvbUFkYXB0ZXIsXG4gIEJ5LFxuICBUaXRsZSxcbiAgZW5hYmxlRGVidWdUb29scyxcbiAgZGlzYWJsZURlYnVnVG9vbHNcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcblxuaW1wb3J0IHtUeXBlLCBpc1ByZXNlbnQsIGlzQmxhbmssIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1xuICBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTLFxuICBCUk9XU0VSX1BMQVRGT1JNX01BUktFUixcbiAgY3JlYXRlSW5pdERvbUFkYXB0ZXJcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgY29yZUxvYWRBbmRCb290c3RyYXAsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgUGxhdGZvcm1SZWYsXG4gIGdldFBsYXRmb3JtLFxuICBjcmVhdGVQbGF0Zm9ybSxcbiAgYXNzZXJ0UGxhdGZvcm0sXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSLFxuICBNYXBJbmplY3RvclxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtQbGF0Zm9ybVJlZl99IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge1JlZmxlY3RvciwgcmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtSZWZsZWN0b3JSZWFkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdG9yX3JlYWRlcic7XG5pbXBvcnQge1Rlc3RhYmlsaXR5UmVnaXN0cnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3Rlc3RhYmlsaXR5L3Rlc3RhYmlsaXR5JztcbmltcG9ydCB7Q29uc29sZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY29uc29sZSc7XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgcHJvdmlkZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCBpbnRvIGBhcHBsaWNhdGlvbigpYCB3aGVuIGJvb3RzdHJhcHBpbmcgYSBjb21wb25lbnRcbiAqIHdoZW4gYWxsIHRlbXBsYXRlc1xuICogaGF2ZSBiZWVuIHByZWNvbXBpbGVkIG9mZmxpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FQUF9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBDT05TVF9FWFBSKFtCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyU3RhdGljUGxhdGZvcm0oKTogUGxhdGZvcm1SZWYge1xuICBpZiAoaXNCbGFuayhnZXRQbGF0Zm9ybSgpKSkge1xuICAgIHZhciB0b2tlbnMgPSBuZXcgTWFwPGFueSwgYW55PigpO1xuICAgIHZhciBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybVJlZl8oKTtcbiAgICB0b2tlbnMuc2V0KFBsYXRmb3JtUmVmLCBwbGF0Zm9ybSk7XG4gICAgdG9rZW5zLnNldChQbGF0Zm9ybVJlZl8sIHBsYXRmb3JtKTtcbiAgICB0b2tlbnMuc2V0KFJlZmxlY3RvciwgcmVmbGVjdG9yKTtcbiAgICB0b2tlbnMuc2V0KFJlZmxlY3RvclJlYWRlciwgcmVmbGVjdG9yKTtcbiAgICB2YXIgdGVzdGFiaWxpdHlSZWdpc3RyeSA9IG5ldyBUZXN0YWJpbGl0eVJlZ2lzdHJ5KCk7XG4gICAgdG9rZW5zLnNldChUZXN0YWJpbGl0eVJlZ2lzdHJ5LCB0ZXN0YWJpbGl0eVJlZ2lzdHJ5KTtcbiAgICB0b2tlbnMuc2V0KENvbnNvbGUsIG5ldyBDb25zb2xlKCkpO1xuICAgIHRva2Vucy5zZXQoQlJPV1NFUl9QTEFURk9STV9NQVJLRVIsIHRydWUpO1xuICAgIHRva2Vucy5zZXQoUExBVEZPUk1fSU5JVElBTElaRVIsIFtjcmVhdGVJbml0RG9tQWRhcHRlcih0ZXN0YWJpbGl0eVJlZ2lzdHJ5KV0pO1xuICAgIGNyZWF0ZVBsYXRmb3JtKG5ldyBNYXBJbmplY3RvcihudWxsLCB0b2tlbnMpKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0UGxhdGZvcm0oQlJPV1NFUl9QTEFURk9STV9NQVJLRVIpO1xufVxuXG4vKipcbiAqIFNlZSB7QGxpbmsgYm9vdHN0cmFwfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcFN0YXRpYyhhcHBDb21wb25lbnRUeXBlOiBUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Qcm92aWRlcnM/OiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFJlZmxlY3Rvcj86IEZ1bmN0aW9uKTogUHJvbWlzZTxDb21wb25lbnRSZWY+IHtcbiAgaWYgKGlzUHJlc2VudChpbml0UmVmbGVjdG9yKSkge1xuICAgIGluaXRSZWZsZWN0b3IoKTtcbiAgfVxuXG4gIGxldCBhcHBQcm92aWRlcnMgPVxuICAgICAgaXNQcmVzZW50KGN1c3RvbVByb3ZpZGVycykgPyBbQlJPV1NFUl9BUFBfUFJPVklERVJTLCBjdXN0b21Qcm92aWRlcnNdIDogQlJPV1NFUl9BUFBfUFJPVklERVJTO1xuICB2YXIgYXBwSW5qZWN0b3IgPVxuICAgICAgUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoYXBwUHJvdmlkZXJzLCBicm93c2VyU3RhdGljUGxhdGZvcm0oKS5pbmplY3Rvcik7XG4gIHJldHVybiBjb3JlTG9hZEFuZEJvb3RzdHJhcChhcHBJbmplY3RvciwgYXBwQ29tcG9uZW50VHlwZSk7XG59XG4iXX0=