'use strict';"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var lang_1 = require('angular2/src/facade/lang');
var collection_1 = require('angular2/src/facade/collection');
var exceptions_1 = require('angular2/src/facade/exceptions');
var element_1 = require('./element');
var exceptions_2 = require('./exceptions');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var di_1 = require('angular2/src/core/di');
var api_1 = require('angular2/src/core/render/api');
var application_tokens_1 = require('angular2/src/core/application_tokens');
var ViewUtils = (function () {
    function ViewUtils(_renderer, _appId) {
        this._renderer = _renderer;
        this._appId = _appId;
        this._nextCompTypeId = 0;
    }
    /**
     * Used by the generated code
     */
    ViewUtils.prototype.createRenderComponentType = function (templateUrl, slotCount, encapsulation, styles) {
        return new api_1.RenderComponentType(this._appId + "-" + this._nextCompTypeId++, templateUrl, slotCount, encapsulation, styles);
    };
    /** @internal */
    ViewUtils.prototype.renderComponent = function (renderComponentType) {
        return this._renderer.renderComponent(renderComponentType);
    };
    ViewUtils = __decorate([
        di_1.Injectable(),
        __param(1, di_1.Inject(application_tokens_1.APP_ID)), 
        __metadata('design:paramtypes', [api_1.RootRenderer, String])
    ], ViewUtils);
    return ViewUtils;
}());
exports.ViewUtils = ViewUtils;
function flattenNestedViewRenderNodes(nodes) {
    return _flattenNestedViewRenderNodes(nodes, []);
}
exports.flattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
function _flattenNestedViewRenderNodes(nodes, renderNodes) {
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node instanceof element_1.AppElement) {
            var appEl = node;
            renderNodes.push(appEl.nativeElement);
            if (lang_1.isPresent(appEl.nestedViews)) {
                for (var k = 0; k < appEl.nestedViews.length; k++) {
                    _flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements, renderNodes);
                }
            }
        }
        else {
            renderNodes.push(node);
        }
    }
    return renderNodes;
}
var EMPTY_ARR = lang_1.CONST_EXPR([]);
function ensureSlotCount(projectableNodes, expectedSlotCount) {
    var res;
    if (lang_1.isBlank(projectableNodes)) {
        res = EMPTY_ARR;
    }
    else if (projectableNodes.length < expectedSlotCount) {
        var givenSlotCount = projectableNodes.length;
        res = collection_1.ListWrapper.createFixedSize(expectedSlotCount);
        for (var i = 0; i < expectedSlotCount; i++) {
            res[i] = (i < givenSlotCount) ? projectableNodes[i] : EMPTY_ARR;
        }
    }
    else {
        res = projectableNodes;
    }
    return res;
}
exports.ensureSlotCount = ensureSlotCount;
exports.MAX_INTERPOLATION_VALUES = 9;
function interpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
        case 1:
            return c0 + _toStringWithNull(a1) + c1;
        case 2:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
        case 3:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3;
        case 4:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4;
        case 5:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
        case 6:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6;
        case 7:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7;
        case 8:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
        case 9:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) +
                c9;
        default:
            throw new exceptions_1.BaseException("Does not support more than 9 expressions");
    }
}
exports.interpolate = interpolate;
function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
}
function checkBinding(throwOnChange, oldValue, newValue) {
    if (throwOnChange) {
        if (!change_detection_1.devModeEqual(oldValue, newValue)) {
            throw new exceptions_2.ExpressionChangedAfterItHasBeenCheckedException(oldValue, newValue, null);
        }
        return false;
    }
    else {
        return !lang_1.looseIdentical(oldValue, newValue);
    }
}
exports.checkBinding = checkBinding;
function arrayLooseIdentical(a, b) {
    if (a.length != b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (!lang_1.looseIdentical(a[i], b[i]))
            return false;
    }
    return true;
}
exports.arrayLooseIdentical = arrayLooseIdentical;
function mapLooseIdentical(m1, m2) {
    var k1 = collection_1.StringMapWrapper.keys(m1);
    var k2 = collection_1.StringMapWrapper.keys(m2);
    if (k1.length != k2.length) {
        return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (!lang_1.looseIdentical(m1[key], m2[key])) {
            return false;
        }
    }
    return true;
}
exports.mapLooseIdentical = mapLooseIdentical;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaWdBMnNjbWEudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3X3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFPTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLDJCQUE0QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdFLDJCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdELHdCQUF5QixXQUFXLENBQUMsQ0FBQTtBQUNyQywyQkFBOEQsY0FBYyxDQUFDLENBQUE7QUFDN0UsaUNBQTJCLHFEQUFxRCxDQUFDLENBQUE7QUFDakYsbUJBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsb0JBQTBELDhCQUE4QixDQUFDLENBQUE7QUFDekYsbUNBQXFCLHNDQUFzQyxDQUFDLENBQUE7QUFJNUQ7SUFHRSxtQkFBb0IsU0FBdUIsRUFBMEIsTUFBYztRQUEvRCxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQTBCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGM0Usb0JBQWUsR0FBVyxDQUFDLENBQUM7SUFFa0QsQ0FBQztJQUV2Rjs7T0FFRztJQUNILDZDQUF5QixHQUF6QixVQUEwQixXQUFtQixFQUFFLFNBQWlCLEVBQ3RDLGFBQWdDLEVBQ2hDLE1BQTZCO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLHlCQUFtQixDQUFJLElBQUksQ0FBQyxNQUFNLFNBQUksSUFBSSxDQUFDLGVBQWUsRUFBSSxFQUFFLFdBQVcsRUFDdkQsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLG1DQUFlLEdBQWYsVUFBZ0IsbUJBQXdDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdE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QUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFkZSx5QkFBaUIsb0JBY2hDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpc0JsYW5rLFxuICBpc1ByZXNlbnQsXG4gIFR5cGUsXG4gIHN0cmluZ2lmeSxcbiAgQ09OU1RfRVhQUixcbiAgbG9vc2VJZGVudGljYWxcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7TGlzdFdyYXBwZXIsIFN0cmluZ01hcFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge0FwcEVsZW1lbnR9IGZyb20gJy4vZWxlbWVudCc7XG5pbXBvcnQge0V4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXhjZXB0aW9ufSBmcm9tICcuL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtkZXZNb2RlRXF1YWx9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtSb290UmVuZGVyZXIsIFJlbmRlckNvbXBvbmVudFR5cGUsIFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7QVBQX0lEfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9hcHBsaWNhdGlvbl90b2tlbnMnO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3VXRpbHMge1xuICBwcml2YXRlIF9uZXh0Q29tcFR5cGVJZDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUm9vdFJlbmRlcmVyLCBASW5qZWN0KEFQUF9JRCkgcHJpdmF0ZSBfYXBwSWQ6IHN0cmluZykge31cblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgZ2VuZXJhdGVkIGNvZGVcbiAgICovXG4gIGNyZWF0ZVJlbmRlckNvbXBvbmVudFR5cGUodGVtcGxhdGVVcmw6IHN0cmluZywgc2xvdENvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBBcnJheTxzdHJpbmcgfCBhbnlbXT4pOiBSZW5kZXJDb21wb25lbnRUeXBlIHtcbiAgICByZXR1cm4gbmV3IFJlbmRlckNvbXBvbmVudFR5cGUoYCR7dGhpcy5fYXBwSWR9LSR7dGhpcy5fbmV4dENvbXBUeXBlSWQrK31gLCB0ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdENvdW50LCBlbmNhcHN1bGF0aW9uLCBzdHlsZXMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICByZW5kZXJDb21wb25lbnQocmVuZGVyQ29tcG9uZW50VHlwZTogUmVuZGVyQ29tcG9uZW50VHlwZSk6IFJlbmRlcmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIucmVuZGVyQ29tcG9uZW50KHJlbmRlckNvbXBvbmVudFR5cGUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzKG5vZGVzOiBhbnlbXSk6IGFueVtdIHtcbiAgcmV0dXJuIF9mbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzKG5vZGVzLCBbXSk7XG59XG5cbmZ1bmN0aW9uIF9mbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzKG5vZGVzOiBhbnlbXSwgcmVuZGVyTm9kZXM6IGFueVtdKTogYW55W10ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFwcEVsZW1lbnQpIHtcbiAgICAgIHZhciBhcHBFbCA9IDxBcHBFbGVtZW50Pm5vZGU7XG4gICAgICByZW5kZXJOb2Rlcy5wdXNoKGFwcEVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgaWYgKGlzUHJlc2VudChhcHBFbC5uZXN0ZWRWaWV3cykpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBhcHBFbC5uZXN0ZWRWaWV3cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIF9mbGF0dGVuTmVzdGVkVmlld1JlbmRlck5vZGVzKGFwcEVsLm5lc3RlZFZpZXdzW2tdLnJvb3ROb2Rlc09yQXBwRWxlbWVudHMsIHJlbmRlck5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJOb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVuZGVyTm9kZXM7XG59XG5cbmNvbnN0IEVNUFRZX0FSUiA9IENPTlNUX0VYUFIoW10pO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU2xvdENvdW50KHByb2plY3RhYmxlTm9kZXM6IGFueVtdW10sIGV4cGVjdGVkU2xvdENvdW50OiBudW1iZXIpOiBhbnlbXVtdIHtcbiAgdmFyIHJlcztcbiAgaWYgKGlzQmxhbmsocHJvamVjdGFibGVOb2RlcykpIHtcbiAgICByZXMgPSBFTVBUWV9BUlI7XG4gIH0gZWxzZSBpZiAocHJvamVjdGFibGVOb2Rlcy5sZW5ndGggPCBleHBlY3RlZFNsb3RDb3VudCkge1xuICAgIHZhciBnaXZlblNsb3RDb3VudCA9IHByb2plY3RhYmxlTm9kZXMubGVuZ3RoO1xuICAgIHJlcyA9IExpc3RXcmFwcGVyLmNyZWF0ZUZpeGVkU2l6ZShleHBlY3RlZFNsb3RDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFNsb3RDb3VudDsgaSsrKSB7XG4gICAgICByZXNbaV0gPSAoaSA8IGdpdmVuU2xvdENvdW50KSA/IHByb2plY3RhYmxlTm9kZXNbaV0gOiBFTVBUWV9BUlI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcyA9IHByb2plY3RhYmxlTm9kZXM7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGNvbnN0IE1BWF9JTlRFUlBPTEFUSU9OX1ZBTFVFUyA9IDk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh2YWx1ZUNvdW50OiBudW1iZXIsIGMwOiBzdHJpbmcsIGExOiBhbnksIGMxOiBzdHJpbmcsIGEyPzogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyPzogc3RyaW5nLCBhMz86IGFueSwgYzM/OiBzdHJpbmcsIGE0PzogYW55LCBjND86IHN0cmluZywgYTU/OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzU/OiBzdHJpbmcsIGE2PzogYW55LCBjNj86IHN0cmluZywgYTc/OiBhbnksIGM3Pzogc3RyaW5nLCBhOD86IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOD86IHN0cmluZywgYTk/OiBhbnksIGM5Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgc3dpdGNoICh2YWx1ZUNvdW50KSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGMwICsgX3RvU3RyaW5nV2l0aE51bGwoYTEpICsgYzE7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGMwICsgX3RvU3RyaW5nV2l0aE51bGwoYTEpICsgYzEgKyBfdG9TdHJpbmdXaXRoTnVsbChhMikgKyBjMjtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gYzAgKyBfdG9TdHJpbmdXaXRoTnVsbChhMSkgKyBjMSArIF90b1N0cmluZ1dpdGhOdWxsKGEyKSArIGMyICsgX3RvU3RyaW5nV2l0aE51bGwoYTMpICtcbiAgICAgICAgICAgICBjMztcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gYzAgKyBfdG9TdHJpbmdXaXRoTnVsbChhMSkgKyBjMSArIF90b1N0cmluZ1dpdGhOdWxsKGEyKSArIGMyICsgX3RvU3RyaW5nV2l0aE51bGwoYTMpICtcbiAgICAgICAgICAgICBjMyArIF90b1N0cmluZ1dpdGhOdWxsKGE0KSArIGM0O1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBjMCArIF90b1N0cmluZ1dpdGhOdWxsKGExKSArIGMxICsgX3RvU3RyaW5nV2l0aE51bGwoYTIpICsgYzIgKyBfdG9TdHJpbmdXaXRoTnVsbChhMykgK1xuICAgICAgICAgICAgIGMzICsgX3RvU3RyaW5nV2l0aE51bGwoYTQpICsgYzQgKyBfdG9TdHJpbmdXaXRoTnVsbChhNSkgKyBjNTtcbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gYzAgKyBfdG9TdHJpbmdXaXRoTnVsbChhMSkgKyBjMSArIF90b1N0cmluZ1dpdGhOdWxsKGEyKSArIGMyICsgX3RvU3RyaW5nV2l0aE51bGwoYTMpICtcbiAgICAgICAgICAgICBjMyArIF90b1N0cmluZ1dpdGhOdWxsKGE0KSArIGM0ICsgX3RvU3RyaW5nV2l0aE51bGwoYTUpICsgYzUgKyBfdG9TdHJpbmdXaXRoTnVsbChhNikgK1xuICAgICAgICAgICAgIGM2O1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBjMCArIF90b1N0cmluZ1dpdGhOdWxsKGExKSArIGMxICsgX3RvU3RyaW5nV2l0aE51bGwoYTIpICsgYzIgKyBfdG9TdHJpbmdXaXRoTnVsbChhMykgK1xuICAgICAgICAgICAgIGMzICsgX3RvU3RyaW5nV2l0aE51bGwoYTQpICsgYzQgKyBfdG9TdHJpbmdXaXRoTnVsbChhNSkgKyBjNSArIF90b1N0cmluZ1dpdGhOdWxsKGE2KSArXG4gICAgICAgICAgICAgYzYgKyBfdG9TdHJpbmdXaXRoTnVsbChhNykgKyBjNztcbiAgICBjYXNlIDg6XG4gICAgICByZXR1cm4gYzAgKyBfdG9TdHJpbmdXaXRoTnVsbChhMSkgKyBjMSArIF90b1N0cmluZ1dpdGhOdWxsKGEyKSArIGMyICsgX3RvU3RyaW5nV2l0aE51bGwoYTMpICtcbiAgICAgICAgICAgICBjMyArIF90b1N0cmluZ1dpdGhOdWxsKGE0KSArIGM0ICsgX3RvU3RyaW5nV2l0aE51bGwoYTUpICsgYzUgKyBfdG9TdHJpbmdXaXRoTnVsbChhNikgK1xuICAgICAgICAgICAgIGM2ICsgX3RvU3RyaW5nV2l0aE51bGwoYTcpICsgYzcgKyBfdG9TdHJpbmdXaXRoTnVsbChhOCkgKyBjODtcbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gYzAgKyBfdG9TdHJpbmdXaXRoTnVsbChhMSkgKyBjMSArIF90b1N0cmluZ1dpdGhOdWxsKGEyKSArIGMyICsgX3RvU3RyaW5nV2l0aE51bGwoYTMpICtcbiAgICAgICAgICAgICBjMyArIF90b1N0cmluZ1dpdGhOdWxsKGE0KSArIGM0ICsgX3RvU3RyaW5nV2l0aE51bGwoYTUpICsgYzUgKyBfdG9TdHJpbmdXaXRoTnVsbChhNikgK1xuICAgICAgICAgICAgIGM2ICsgX3RvU3RyaW5nV2l0aE51bGwoYTcpICsgYzcgKyBfdG9TdHJpbmdXaXRoTnVsbChhOCkgKyBjOCArIF90b1N0cmluZ1dpdGhOdWxsKGE5KSArXG4gICAgICAgICAgICAgYzk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBEb2VzIG5vdCBzdXBwb3J0IG1vcmUgdGhhbiA5IGV4cHJlc3Npb25zYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3RvU3RyaW5nV2l0aE51bGwodjogYW55KTogc3RyaW5nIHtcbiAgcmV0dXJuIHYgIT0gbnVsbCA/IHYudG9TdHJpbmcoKSA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCaW5kaW5nKHRocm93T25DaGFuZ2U6IGJvb2xlYW4sIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKHRocm93T25DaGFuZ2UpIHtcbiAgICBpZiAoIWRldk1vZGVFcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFeGNlcHRpb24ob2xkVmFsdWUsIG5ld1ZhbHVlLCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAhbG9vc2VJZGVudGljYWwob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlMb29zZUlkZW50aWNhbChhOiBhbnlbXSwgYjogYW55W10pOiBib29sZWFuIHtcbiAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgIGlmICghbG9vc2VJZGVudGljYWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcExvb3NlSWRlbnRpY2FsPFY+KG0xOiB7W2tleTogc3RyaW5nXTogVn0sIG0yOiB7W2tleTogc3RyaW5nXTogVn0pOiBib29sZWFuIHtcbiAgdmFyIGsxID0gU3RyaW5nTWFwV3JhcHBlci5rZXlzKG0xKTtcbiAgdmFyIGsyID0gU3RyaW5nTWFwV3JhcHBlci5rZXlzKG0yKTtcbiAgaWYgKGsxLmxlbmd0aCAhPSBrMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGtleTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrMS5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGsxW2ldO1xuICAgIGlmICghbG9vc2VJZGVudGljYWwobTFba2V5XSwgbTJba2V5XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=