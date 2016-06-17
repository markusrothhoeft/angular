'use strict';"use strict";
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 */
exports.APP_ID = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppId'));
function appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 */
exports.APP_ID_RANDOM_PROVIDER = lang_1.CONST_EXPR(new di_1.Provider(exports.APP_ID, { useFactory: appIdRandomProviderFactory, deps: [] }));
function _randomChar() {
    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 */
exports.PLATFORM_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Initializer"));
/**
 * A function that will be executed when an application is initialized.
 */
exports.APP_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Initializer"));
/**
 * A token which indicates the root directory of the application
 */
exports.PACKAGE_ROOT_URL = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Packages Root URL"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1pZ0Eyc2NtYS50bXAvYW5ndWxhcjIvc3JjL2NvcmUvYXBwbGljYXRpb25fdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBb0Msc0JBQXNCLENBQUMsQ0FBQTtBQUMzRCxxQkFBOEMsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RTs7Ozs7Ozs7R0FRRztBQUNVLGNBQU0sR0FBZ0IsaUJBQVUsQ0FBQyxJQUFJLGdCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUV4RTtJQUNFLE1BQU0sQ0FBQyxLQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBSSxDQUFDO0FBQzVELENBQUM7QUFFRDs7R0FFRztBQUNVLDhCQUFzQixHQUMvQixpQkFBVSxDQUFDLElBQUksYUFBUSxDQUFDLGNBQU0sRUFBRSxFQUFDLFVBQVUsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXpGO0lBQ0UsTUFBTSxDQUFDLG9CQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDLFdBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFFRDs7R0FFRztBQUNVLDRCQUFvQixHQUM3QixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFFeEQ7O0dBRUc7QUFDVSx1QkFBZSxHQUFnQixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7QUFFbkc7O0dBRUc7QUFDVSx3QkFBZ0IsR0FDekIsaUJBQVUsQ0FBQyxJQUFJLGdCQUFXLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGFxdWVUb2tlbiwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7Q09OU1RfRVhQUiwgTWF0aCwgU3RyaW5nV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuLyoqXG4gKiBBIERJIFRva2VuIHJlcHJlc2VudGluZyBhIHVuaXF1ZSBzdHJpbmcgaWQgYXNzaWduZWQgdG8gdGhlIGFwcGxpY2F0aW9uIGJ5IEFuZ3VsYXIgYW5kIHVzZWRcbiAqIHByaW1hcmlseSBmb3IgcHJlZml4aW5nIGFwcGxpY2F0aW9uIGF0dHJpYnV0ZXMgYW5kIENTUyBzdHlsZXMgd2hlblxuICoge0BsaW5rIFZpZXdFbmNhcHN1bGF0aW9uI0VtdWxhdGVkfSBpcyBiZWluZyB1c2VkLlxuICpcbiAqIElmIHlvdSBuZWVkIHRvIGF2b2lkIHJhbmRvbWx5IGdlbmVyYXRlZCB2YWx1ZSB0byBiZSB1c2VkIGFzIGFuIGFwcGxpY2F0aW9uIGlkLCB5b3UgY2FuIHByb3ZpZGVcbiAqIGEgY3VzdG9tIHZhbHVlIHZpYSBhIERJIHByb3ZpZGVyIDwhLS0gVE9ETzogcHJvdmlkZXIgLS0+IGNvbmZpZ3VyaW5nIHRoZSByb290IHtAbGluayBJbmplY3Rvcn1cbiAqIHVzaW5nIHRoaXMgdG9rZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSUQ6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ0FwcElkJykpO1xuXG5mdW5jdGlvbiBhcHBJZFJhbmRvbVByb3ZpZGVyRmFjdG9yeSgpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7X3JhbmRvbUNoYXIoKX0ke19yYW5kb21DaGFyKCl9JHtfcmFuZG9tQ2hhcigpfWA7XG59XG5cbi8qKlxuICogUHJvdmlkZXJzIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIHJhbmRvbSBBUFBfSURfVE9LRU4uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSURfUkFORE9NX1BST1ZJREVSOiBQcm92aWRlciA9XG4gICAgQ09OU1RfRVhQUihuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlRmFjdG9yeTogYXBwSWRSYW5kb21Qcm92aWRlckZhY3RvcnksIGRlcHM6IFtdfSkpO1xuXG5mdW5jdGlvbiBfcmFuZG9tQ2hhcigpOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5mcm9tQ2hhckNvZGUoOTcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkpO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYSBwbGF0Zm9ybSBpcyBpbml0aWFsaXplZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0lOSVRJQUxJWkVSOiBPcGFxdWVUb2tlbiA9XG4gICAgQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJQbGF0Zm9ybSBJbml0aWFsaXplclwiKSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBhbiBhcHBsaWNhdGlvbiBpcyBpbml0aWFsaXplZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9JTklUSUFMSVpFUjogT3BhcXVlVG9rZW4gPSBDT05TVF9FWFBSKG5ldyBPcGFxdWVUb2tlbihcIkFwcGxpY2F0aW9uIEluaXRpYWxpemVyXCIpKTtcblxuLyoqXG4gKiBBIHRva2VuIHdoaWNoIGluZGljYXRlcyB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1JPT1RfVVJMOiBPcGFxdWVUb2tlbiA9XG4gICAgQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJBcHBsaWNhdGlvbiBQYWNrYWdlcyBSb290IFVSTFwiKSk7XG4iXX0=