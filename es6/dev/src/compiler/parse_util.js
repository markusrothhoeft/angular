import { isPresent } from 'angular2/src/facade/lang';
export class ParseLocation {
    constructor(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    toString() {
        return isPresent(this.offset) ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
}
export class ParseSourceFile {
    constructor(content, url) {
        this.content = content;
        this.url = url;
    }
}
export class ParseSourceSpan {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
}
export class ParseError {
    constructor(span, msg) {
        this.span = span;
        this.msg = msg;
    }
    toString() {
        var source = this.span.start.file.content;
        var ctxStart = this.span.start.offset;
        var contextStr = '';
        if (isPresent(ctxStart)) {
            if (ctxStart > source.length - 1) {
                ctxStart = source.length - 1;
            }
            var ctxEnd = ctxStart;
            var ctxLen = 0;
            var ctxLines = 0;
            while (ctxLen < 100 && ctxStart > 0) {
                ctxStart--;
                ctxLen++;
                if (source[ctxStart] == "\n") {
                    if (++ctxLines == 3) {
                        break;
                    }
                }
            }
            ctxLen = 0;
            ctxLines = 0;
            while (ctxLen < 100 && ctxEnd < source.length - 1) {
                ctxEnd++;
                ctxLen++;
                if (source[ctxEnd] == "\n") {
                    if (++ctxLines == 3) {
                        break;
                    }
                }
            }
            let context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
                source.substring(this.span.start.offset, ctxEnd + 1);
            contextStr = ` ("${context}")`;
        }
        return `${this.msg}${contextStr}: ${this.span.start}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaHRGdEtaSGoudG1wL2FuZ3VsYXIyL3NyYy9jb21waWxlci9wYXJzZV91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO0FBRWxEO0lBQ0UsWUFBbUIsSUFBcUIsRUFBUyxNQUFjLEVBQVMsSUFBWSxFQUNqRSxHQUFXO1FBRFgsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNqRSxRQUFHLEdBQUgsR0FBRyxDQUFRO0lBQUcsQ0FBQztJQUVsQyxRQUFRO1FBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM5RixDQUFDO0FBQ0gsQ0FBQztBQUVEO0lBQ0UsWUFBbUIsT0FBZSxFQUFTLEdBQVc7UUFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFBRyxDQUFDO0FBQzVELENBQUM7QUFFRDtJQUNFLFlBQW1CLEtBQW9CLEVBQVMsR0FBa0I7UUFBL0MsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQWU7SUFBRyxDQUFDO0lBRXRFLFFBQVE7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9FLENBQUM7QUFDSCxDQUFDO0FBRUQ7SUFDRSxZQUFtQixJQUFxQixFQUFTLEdBQVc7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFRO0lBQUcsQ0FBQztJQUVoRSxRQUFRO1FBQ04sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFDRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLE9BQU8sTUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE1BQU0sRUFBRSxDQUFDO2dCQUNULEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM3QixFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixLQUFLLENBQUM7b0JBQ1IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsS0FBSyxDQUFDO29CQUNSLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZO2dCQUNqRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkUsVUFBVSxHQUFHLE1BQU0sT0FBTyxJQUFJLENBQUM7UUFDakMsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQgY2xhc3MgUGFyc2VMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWxlOiBQYXJzZVNvdXJjZUZpbGUsIHB1YmxpYyBvZmZzZXQ6IG51bWJlciwgcHVibGljIGxpbmU6IG51bWJlcixcbiAgICAgICAgICAgICAgcHVibGljIGNvbDogbnVtYmVyKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlzUHJlc2VudCh0aGlzLm9mZnNldCkgPyBgJHt0aGlzLmZpbGUudXJsfUAke3RoaXMubGluZX06JHt0aGlzLmNvbH1gIDogdGhpcy5maWxlLnVybDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTb3VyY2VGaWxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRlbnQ6IHN0cmluZywgcHVibGljIHVybDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2VTb3VyY2VTcGFuIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YXJ0OiBQYXJzZUxvY2F0aW9uLCBwdWJsaWMgZW5kOiBQYXJzZUxvY2F0aW9uKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQuZmlsZS5jb250ZW50LnN1YnN0cmluZyh0aGlzLnN0YXJ0Lm9mZnNldCwgdGhpcy5lbmQub2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIHB1YmxpYyBtc2c6IHN0cmluZykge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNwYW4uc3RhcnQuZmlsZS5jb250ZW50O1xuICAgIHZhciBjdHhTdGFydCA9IHRoaXMuc3Bhbi5zdGFydC5vZmZzZXQ7XG4gICAgdmFyIGNvbnRleHRTdHIgPSAnJztcbiAgICBpZiAoaXNQcmVzZW50KGN0eFN0YXJ0KSkge1xuICAgICAgaWYgKGN0eFN0YXJ0ID4gc291cmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3R4U3RhcnQgPSBzb3VyY2UubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIHZhciBjdHhFbmQgPSBjdHhTdGFydDtcbiAgICAgIHZhciBjdHhMZW4gPSAwO1xuICAgICAgdmFyIGN0eExpbmVzID0gMDtcblxuICAgICAgd2hpbGUgKGN0eExlbiA8IDEwMCAmJiBjdHhTdGFydCA+IDApIHtcbiAgICAgICAgY3R4U3RhcnQtLTtcbiAgICAgICAgY3R4TGVuKys7XG4gICAgICAgIGlmIChzb3VyY2VbY3R4U3RhcnRdID09IFwiXFxuXCIpIHtcbiAgICAgICAgICBpZiAoKytjdHhMaW5lcyA9PSAzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3R4TGVuID0gMDtcbiAgICAgIGN0eExpbmVzID0gMDtcbiAgICAgIHdoaWxlIChjdHhMZW4gPCAxMDAgJiYgY3R4RW5kIDwgc291cmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3R4RW5kKys7XG4gICAgICAgIGN0eExlbisrO1xuICAgICAgICBpZiAoc291cmNlW2N0eEVuZF0gPT0gXCJcXG5cIikge1xuICAgICAgICAgIGlmICgrK2N0eExpbmVzID09IDMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGNvbnRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGN0eFN0YXJ0LCB0aGlzLnNwYW4uc3RhcnQub2Zmc2V0KSArICdbRVJST1IgLT5dJyArXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5zdWJzdHJpbmcodGhpcy5zcGFuLnN0YXJ0Lm9mZnNldCwgY3R4RW5kICsgMSk7XG4gICAgICBjb250ZXh0U3RyID0gYCAoXCIke2NvbnRleHR9XCIpYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMubXNnfSR7Y29udGV4dFN0cn06ICR7dGhpcy5zcGFuLnN0YXJ0fWA7XG4gIH1cbn1cbiJdfQ==