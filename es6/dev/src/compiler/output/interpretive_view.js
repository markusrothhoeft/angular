import { isPresent } from 'angular2/src/facade/lang';
import { AppView, DebugAppView } from 'angular2/src/core/linker/view';
import { BaseException } from 'angular2/src/facade/exceptions';
export class InterpretiveAppViewInstanceFactory {
    createInstance(superClass, clazz, args, props, getters, methods) {
        if (superClass === AppView) {
            // We are always using DebugAppView as parent.
            // However, in prod mode we generate a constructor call that does
            // not have the argument for the debugNodeInfos.
            args = args.concat([null]);
            return new _InterpretiveAppView(args, props, getters, methods);
        }
        else if (superClass === DebugAppView) {
            return new _InterpretiveAppView(args, props, getters, methods);
        }
        throw new BaseException(`Can't instantiate class ${superClass} in interpretative mode`);
    }
}
class _InterpretiveAppView extends DebugAppView {
    constructor(args, props, getters, methods) {
        super(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9], args[10]);
        this.props = props;
        this.getters = getters;
        this.methods = methods;
    }
    createInternal(rootSelector) {
        var m = this.methods.get('createInternal');
        if (isPresent(m)) {
            return m(rootSelector);
        }
        else {
            return super.createInternal(rootSelector);
        }
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
        var m = this.methods.get('injectorGetInternal');
        if (isPresent(m)) {
            return m(token, nodeIndex, notFoundResult);
        }
        else {
            return super.injectorGet(token, nodeIndex, notFoundResult);
        }
    }
    destroyInternal() {
        var m = this.methods.get('destroyInternal');
        if (isPresent(m)) {
            return m();
        }
        else {
            return super.destroyInternal();
        }
    }
    dirtyParentQueriesInternal() {
        var m = this.methods.get('dirtyParentQueriesInternal');
        if (isPresent(m)) {
            return m();
        }
        else {
            return super.dirtyParentQueriesInternal();
        }
    }
    detectChangesInternal(throwOnChange) {
        var m = this.methods.get('detectChangesInternal');
        if (isPresent(m)) {
            return m(throwOnChange);
        }
        else {
            return super.detectChangesInternal(throwOnChange);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwcmV0aXZlX3ZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWh0RnRLWkhqLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvb3V0cHV0L2ludGVycHJldGl2ZV92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO09BQzNDLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLCtCQUErQjtPQUU1RCxFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztBQUc1RDtJQUNFLGNBQWMsQ0FBQyxVQUFlLEVBQUUsS0FBVSxFQUFFLElBQVcsRUFBRSxLQUF1QixFQUNqRSxPQUE4QixFQUFFLE9BQThCO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLDhDQUE4QztZQUM5QyxpRUFBaUU7WUFDakUsZ0RBQWdEO1lBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFDRCxNQUFNLElBQUksYUFBYSxDQUFDLDJCQUEyQixVQUFVLHlCQUF5QixDQUFDLENBQUM7SUFDMUYsQ0FBQztBQUNILENBQUM7QUFFRCxtQ0FBbUMsWUFBWTtJQUM3QyxZQUFZLElBQVcsRUFBUyxLQUF1QixFQUFTLE9BQThC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Q0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtBcHBWaWV3LCBEZWJ1Z0FwcFZpZXd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci92aWV3JztcbmltcG9ydCB7QXBwRWxlbWVudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2VsZW1lbnQnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtJbnN0YW5jZUZhY3RvcnksIER5bmFtaWNJbnN0YW5jZX0gZnJvbSAnLi9vdXRwdXRfaW50ZXJwcmV0ZXInO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJwcmV0aXZlQXBwVmlld0luc3RhbmNlRmFjdG9yeSBpbXBsZW1lbnRzIEluc3RhbmNlRmFjdG9yeSB7XG4gIGNyZWF0ZUluc3RhbmNlKHN1cGVyQ2xhc3M6IGFueSwgY2xheno6IGFueSwgYXJnczogYW55W10sIHByb3BzOiBNYXA8c3RyaW5nLCBhbnk+LFxuICAgICAgICAgICAgICAgICBnZXR0ZXJzOiBNYXA8c3RyaW5nLCBGdW5jdGlvbj4sIG1ldGhvZHM6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPik6IGFueSB7XG4gICAgaWYgKHN1cGVyQ2xhc3MgPT09IEFwcFZpZXcpIHtcbiAgICAgIC8vIFdlIGFyZSBhbHdheXMgdXNpbmcgRGVidWdBcHBWaWV3IGFzIHBhcmVudC5cbiAgICAgIC8vIEhvd2V2ZXIsIGluIHByb2QgbW9kZSB3ZSBnZW5lcmF0ZSBhIGNvbnN0cnVjdG9yIGNhbGwgdGhhdCBkb2VzXG4gICAgICAvLyBub3QgaGF2ZSB0aGUgYXJndW1lbnQgZm9yIHRoZSBkZWJ1Z05vZGVJbmZvcy5cbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbbnVsbF0pO1xuICAgICAgcmV0dXJuIG5ldyBfSW50ZXJwcmV0aXZlQXBwVmlldyhhcmdzLCBwcm9wcywgZ2V0dGVycywgbWV0aG9kcyk7XG4gICAgfSBlbHNlIGlmIChzdXBlckNsYXNzID09PSBEZWJ1Z0FwcFZpZXcpIHtcbiAgICAgIHJldHVybiBuZXcgX0ludGVycHJldGl2ZUFwcFZpZXcoYXJncywgcHJvcHMsIGdldHRlcnMsIG1ldGhvZHMpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgQ2FuJ3QgaW5zdGFudGlhdGUgY2xhc3MgJHtzdXBlckNsYXNzfSBpbiBpbnRlcnByZXRhdGl2ZSBtb2RlYCk7XG4gIH1cbn1cblxuY2xhc3MgX0ludGVycHJldGl2ZUFwcFZpZXcgZXh0ZW5kcyBEZWJ1Z0FwcFZpZXc8YW55PiBpbXBsZW1lbnRzIER5bmFtaWNJbnN0YW5jZSB7XG4gIGNvbnN0cnVjdG9yKGFyZ3M6IGFueVtdLCBwdWJsaWMgcHJvcHM6IE1hcDxzdHJpbmcsIGFueT4sIHB1YmxpYyBnZXR0ZXJzOiBNYXA8c3RyaW5nLCBGdW5jdGlvbj4sXG4gICAgICAgICAgICAgIHB1YmxpYyBtZXRob2RzOiBNYXA8c3RyaW5nLCBGdW5jdGlvbj4pIHtcbiAgICBzdXBlcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdLCBhcmdzWzddLCBhcmdzWzhdLCBhcmdzWzldLFxuICAgICAgICAgIGFyZ3NbMTBdKTtcbiAgfVxuICBjcmVhdGVJbnRlcm5hbChyb290U2VsZWN0b3I6IHN0cmluZyB8IGFueSk6IEFwcEVsZW1lbnQge1xuICAgIHZhciBtID0gdGhpcy5tZXRob2RzLmdldCgnY3JlYXRlSW50ZXJuYWwnKTtcbiAgICBpZiAoaXNQcmVzZW50KG0pKSB7XG4gICAgICByZXR1cm4gbShyb290U2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlSW50ZXJuYWwocm9vdFNlbGVjdG9yKTtcbiAgICB9XG4gIH1cbiAgaW5qZWN0b3JHZXRJbnRlcm5hbCh0b2tlbjogYW55LCBub2RlSW5kZXg6IG51bWJlciwgbm90Rm91bmRSZXN1bHQ6IGFueSk6IGFueSB7XG4gICAgdmFyIG0gPSB0aGlzLm1ldGhvZHMuZ2V0KCdpbmplY3RvckdldEludGVybmFsJyk7XG4gICAgaWYgKGlzUHJlc2VudChtKSkge1xuICAgICAgcmV0dXJuIG0odG9rZW4sIG5vZGVJbmRleCwgbm90Rm91bmRSZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuaW5qZWN0b3JHZXQodG9rZW4sIG5vZGVJbmRleCwgbm90Rm91bmRSZXN1bHQpO1xuICAgIH1cbiAgfVxuICBkZXN0cm95SW50ZXJuYWwoKTogdm9pZCB7XG4gICAgdmFyIG0gPSB0aGlzLm1ldGhvZHMuZ2V0KCdkZXN0cm95SW50ZXJuYWwnKTtcbiAgICBpZiAoaXNQcmVzZW50KG0pKSB7XG4gICAgICByZXR1cm4gbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuZGVzdHJveUludGVybmFsKCk7XG4gICAgfVxuICB9XG4gIGRpcnR5UGFyZW50UXVlcmllc0ludGVybmFsKCk6IHZvaWQge1xuICAgIHZhciBtID0gdGhpcy5tZXRob2RzLmdldCgnZGlydHlQYXJlbnRRdWVyaWVzSW50ZXJuYWwnKTtcbiAgICBpZiAoaXNQcmVzZW50KG0pKSB7XG4gICAgICByZXR1cm4gbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuZGlydHlQYXJlbnRRdWVyaWVzSW50ZXJuYWwoKTtcbiAgICB9XG4gIH1cbiAgZGV0ZWN0Q2hhbmdlc0ludGVybmFsKHRocm93T25DaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB2YXIgbSA9IHRoaXMubWV0aG9kcy5nZXQoJ2RldGVjdENoYW5nZXNJbnRlcm5hbCcpO1xuICAgIGlmIChpc1ByZXNlbnQobSkpIHtcbiAgICAgIHJldHVybiBtKHRocm93T25DaGFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuZGV0ZWN0Q2hhbmdlc0ludGVybmFsKHRocm93T25DaGFuZ2UpO1xuICAgIH1cbiAgfVxufVxuIl19