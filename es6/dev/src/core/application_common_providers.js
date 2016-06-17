import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { APP_ID_RANDOM_PROVIDER } from './application_tokens';
import { APPLICATION_CORE_PROVIDERS } from './application_ref';
import { IterableDiffers, defaultIterableDiffers, KeyValueDiffers, defaultKeyValueDiffers } from './change_detection/change_detection';
import { ViewUtils } from "./linker/view_utils";
import { ComponentResolver } from './linker/component_resolver';
import { ReflectorComponentResolver } from "./linker/component_resolver";
import { DynamicComponentLoader } from './linker/dynamic_component_loader';
import { DynamicComponentLoader_ } from "./linker/dynamic_component_loader";
var __unused; // avoid unused import when Type union types are erased
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
export const APPLICATION_COMMON_PROVIDERS = CONST_EXPR([
    APPLICATION_CORE_PROVIDERS,
    new Provider(ComponentResolver, { useClass: ReflectorComponentResolver }),
    APP_ID_RANDOM_PROVIDER,
    ViewUtils,
    new Provider(IterableDiffers, { useValue: defaultIterableDiffers }),
    new Provider(KeyValueDiffers, { useValue: defaultKeyValueDiffers }),
    new Provider(DynamicComponentLoader, { useClass: DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaHRGdEtaSGoudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBTyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDbEQsRUFBVSxRQUFRLEVBQXdCLE1BQU0sc0JBQXNCO09BQ3RFLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0I7T0FDcEQsRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1CQUFtQjtPQUNyRCxFQUNMLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLHNCQUFzQixFQUN2QixNQUFNLHFDQUFxQztPQUNyQyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQjtPQUN0QyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCO09BQ3RELEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw2QkFBNkI7T0FDL0QsRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG1DQUFtQztPQUNqRSxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DO0FBRXpFLElBQUksUUFBYyxDQUFDLENBQUUsdURBQXVEO0FBRTVFOzs7R0FHRztBQUNILE9BQU8sTUFBTSw0QkFBNEIsR0FBbUMsVUFBVSxDQUFDO0lBQ3JGLDBCQUEwQjtJQUMxQixJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBQyxDQUFDO0lBQ3ZFLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFDLENBQUM7SUFDakUsSUFBSSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFDLENBQUM7SUFDakUsSUFBSSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQztDQUMxRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3Byb3ZpZGUsIFByb3ZpZGVyLCBJbmplY3RvciwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7QVBQX0lEX1JBTkRPTV9QUk9WSURFUn0gZnJvbSAnLi9hcHBsaWNhdGlvbl90b2tlbnMnO1xuaW1wb3J0IHtBUFBMSUNBVElPTl9DT1JFX1BST1ZJREVSU30gZnJvbSAnLi9hcHBsaWNhdGlvbl9yZWYnO1xuaW1wb3J0IHtcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBkZWZhdWx0SXRlcmFibGVEaWZmZXJzLFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIGRlZmF1bHRLZXlWYWx1ZURpZmZlcnNcbn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtWaWV3VXRpbHN9IGZyb20gXCIuL2xpbmtlci92aWV3X3V0aWxzXCI7XG5pbXBvcnQge0NvbXBvbmVudFJlc29sdmVyfSBmcm9tICcuL2xpbmtlci9jb21wb25lbnRfcmVzb2x2ZXInO1xuaW1wb3J0IHtSZWZsZWN0b3JDb21wb25lbnRSZXNvbHZlcn0gZnJvbSBcIi4vbGlua2VyL2NvbXBvbmVudF9yZXNvbHZlclwiO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyfSBmcm9tICcuL2xpbmtlci9keW5hbWljX2NvbXBvbmVudF9sb2FkZXInO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyX30gZnJvbSBcIi4vbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlclwiO1xuXG52YXIgX191bnVzZWQ6IFR5cGU7ICAvLyBhdm9pZCB1bnVzZWQgaW1wb3J0IHdoZW4gVHlwZSB1bmlvbiB0eXBlcyBhcmUgZXJhc2VkXG5cbi8qKlxuICogQSBkZWZhdWx0IHNldCBvZiBwcm92aWRlcnMgd2hpY2ggc2hvdWxkIGJlIGluY2x1ZGVkIGluIGFueSBBbmd1bGFyXG4gKiBhcHBsaWNhdGlvbiwgcmVnYXJkbGVzcyBvZiB0aGUgcGxhdGZvcm0gaXQgcnVucyBvbnRvLlxuICovXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUzogQXJyYXk8VHlwZSB8IFByb3ZpZGVyIHwgYW55W10+ID0gQ09OU1RfRVhQUihbXG4gIEFQUExJQ0FUSU9OX0NPUkVfUFJPVklERVJTLFxuICBuZXcgUHJvdmlkZXIoQ29tcG9uZW50UmVzb2x2ZXIsIHt1c2VDbGFzczogUmVmbGVjdG9yQ29tcG9uZW50UmVzb2x2ZXJ9KSxcbiAgQVBQX0lEX1JBTkRPTV9QUk9WSURFUixcbiAgVmlld1V0aWxzLFxuICBuZXcgUHJvdmlkZXIoSXRlcmFibGVEaWZmZXJzLCB7dXNlVmFsdWU6IGRlZmF1bHRJdGVyYWJsZURpZmZlcnN9KSxcbiAgbmV3IFByb3ZpZGVyKEtleVZhbHVlRGlmZmVycywge3VzZVZhbHVlOiBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzfSksXG4gIG5ldyBQcm92aWRlcihEeW5hbWljQ29tcG9uZW50TG9hZGVyLCB7dXNlQ2xhc3M6IER5bmFtaWNDb21wb25lbnRMb2FkZXJffSlcbl0pOyJdfQ==