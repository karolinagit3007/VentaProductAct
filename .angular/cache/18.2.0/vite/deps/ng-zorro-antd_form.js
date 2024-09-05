import {
  CdkConnectedOverlay,
  DEFAULT_TOOLTIP_POSITIONS,
  NzConnectedOverlayDirective,
  NzI18nService,
  NzNoAnimationDirective,
  NzOverlayModule,
  OverlayModule,
  POSITION_MAP,
  getPlacementName,
  helpMotion,
  zoomBigMotion
} from "./chunk-EU4V2BKL.js";
import {
  __decorate
} from "./chunk-2PQTKQ3L.js";
import {
  NzBreakpointService,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  gridResponsiveMap
} from "./chunk-IHUKZM5T.js";
import {
  AbstractControl,
  FormControlDirective,
  FormControlName,
  MediaMatcher,
  NgControl,
  NgModel,
  NzFormStatusService
} from "./chunk-KYHKKAWK.js";
import {
  Directionality
} from "./chunk-ZIPX65SL.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgClass,
  NgModule,
  NgStyle,
  NgZone,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  Output,
  PLATFORM_ID,
  Platform,
  Renderer2,
  ReplaySubject,
  Subject,
  Subscription,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  WithConfig,
  _getEventTarget,
  asapScheduler,
  booleanAttribute,
  delay,
  distinctUntilChanged,
  filter,
  inject,
  isNotNil,
  isPlatformBrowser,
  isPresetColor,
  map,
  setClassMetadata,
  startWith,
  takeUntil,
  tap,
  toBoolean,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-WIXNCW5V.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5K356HEJ.js";

// ../../../../../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-grid.mjs
var _NzRowDirective = class _NzRowDirective {
  getGutter() {
    const results = [null, null];
    const gutter = this.nzGutter || 0;
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object" && g !== null) {
        results[index] = null;
        Object.keys(gridResponsiveMap).map((screen) => {
          const bp = screen;
          if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
            results[index] = g[bp];
          }
        });
      } else {
        results[index] = Number(g) || null;
      }
    });
    return results;
  }
  setGutterStyle() {
    const [horizontalGutter, verticalGutter] = this.getGutter();
    this.actualGutter$.next([horizontalGutter, verticalGutter]);
    const renderGutter = (name, gutter) => {
      const nativeElement = this.elementRef.nativeElement;
      if (gutter !== null) {
        this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
      }
    };
    renderGutter("margin-left", horizontalGutter);
    renderGutter("margin-right", horizontalGutter);
    renderGutter("margin-top", verticalGutter);
    renderGutter("margin-bottom", verticalGutter);
  }
  constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.mediaMatcher = mediaMatcher;
    this.ngZone = ngZone;
    this.platform = platform;
    this.breakpointService = breakpointService;
    this.directionality = directionality;
    this.nzAlign = null;
    this.nzJustify = null;
    this.nzGutter = null;
    this.actualGutter$ = new ReplaySubject(1);
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
    this.setGutterStyle();
  }
  ngOnChanges(changes) {
    if (changes.nzGutter) {
      this.setGutterStyle();
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.setGutterStyle();
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzRowDirective.ɵfac = function NzRowDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzBreakpointService), ɵɵdirectiveInject(Directionality));
};
_NzRowDirective.ɵdir = ɵɵdefineDirective({
  type: _NzRowDirective,
  selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]],
  hostAttrs: [1, "ant-row"],
  hostVars: 20,
  hostBindings: function NzRowDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-space-evenly", ctx.nzJustify === "space-evenly")("ant-row-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAlign: "nzAlign",
    nzJustify: "nzJustify",
    nzGutter: "nzGutter"
  },
  exportAs: ["nzRow"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzRowDirective = _NzRowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-row],nz-row,nz-form-item",
      exportAs: "nzRow",
      host: {
        class: "ant-row",
        "[class.ant-row-top]": `nzAlign === 'top'`,
        "[class.ant-row-middle]": `nzAlign === 'middle'`,
        "[class.ant-row-bottom]": `nzAlign === 'bottom'`,
        "[class.ant-row-start]": `nzJustify === 'start'`,
        "[class.ant-row-end]": `nzJustify === 'end'`,
        "[class.ant-row-center]": `nzJustify === 'center'`,
        "[class.ant-row-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-row-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-row-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-row-rtl]": `dir === "rtl"`
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: MediaMatcher
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzBreakpointService
  }, {
    type: Directionality
  }], {
    nzAlign: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzGutter: [{
      type: Input
    }]
  });
})();
var _NzColDirective = class _NzColDirective {
  setHostClassMap() {
    const hostClassMap = __spreadValues({
      ["ant-col"]: true,
      [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan),
      [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
      [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
      [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull),
      [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush),
      ["ant-col-rtl"]: this.dir === "rtl"
    }, this.generateClass());
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i)) {
        this.renderer.removeClass(this.elementRef.nativeElement, i);
      }
    }
    this.classMap = __spreadValues({}, hostClassMap);
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        this.renderer.addClass(this.elementRef.nativeElement, i);
      }
    }
  }
  setHostFlexStyle() {
    this.hostFlexStyle = this.parseFlex(this.nzFlex);
  }
  parseFlex(flex) {
    if (typeof flex === "number") {
      return `${flex} ${flex} auto`;
    } else if (typeof flex === "string") {
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
    }
    return flex;
  }
  generateClass() {
    const listOfSizeInputName = ["nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"];
    const listClassMap = {};
    listOfSizeInputName.forEach((name) => {
      const sizeName = name.replace("nz", "").toLowerCase();
      if (isNotNil(this[name])) {
        if (typeof this[name] === "number" || typeof this[name] === "string") {
          listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
        } else {
          const embedded = this[name];
          const prefixArray = ["span", "pull", "push", "offset", "order"];
          prefixArray.forEach((prefix) => {
            const prefixClass = prefix === "span" ? "-" : `-${prefix}-`;
            listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
          });
        }
      }
    });
    return listClassMap;
  }
  constructor(elementRef, renderer, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.classMap = {};
    this.destroy$ = new Subject();
    this.hostFlexStyle = null;
    this.dir = "ltr";
    this.nzFlex = null;
    this.nzSpan = null;
    this.nzOrder = null;
    this.nzOffset = null;
    this.nzPush = null;
    this.nzPull = null;
    this.nzXs = null;
    this.nzSm = null;
    this.nzMd = null;
    this.nzLg = null;
    this.nzXl = null;
    this.nzXXl = null;
    this.nzRowDirective = inject(NzRowDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setHostClassMap();
    });
    this.setHostClassMap();
    this.setHostFlexStyle();
  }
  ngOnChanges(changes) {
    this.setHostClassMap();
    const {
      nzFlex
    } = changes;
    if (nzFlex) {
      this.setHostFlexStyle();
    }
  }
  ngAfterViewInit() {
    if (this.nzRowDirective) {
      this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe(([horizontalGutter, verticalGutter]) => {
        const renderGutter = (name, gutter) => {
          const nativeElement = this.elementRef.nativeElement;
          if (gutter !== null) {
            this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
          }
        };
        renderGutter("padding-left", horizontalGutter);
        renderGutter("padding-right", horizontalGutter);
        renderGutter("padding-top", verticalGutter);
        renderGutter("padding-bottom", verticalGutter);
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzColDirective.ɵfac = function NzColDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzColDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality));
};
_NzColDirective.ɵdir = ɵɵdefineDirective({
  type: _NzColDirective,
  selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]],
  hostVars: 2,
  hostBindings: function NzColDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("flex", ctx.hostFlexStyle);
    }
  },
  inputs: {
    nzFlex: "nzFlex",
    nzSpan: "nzSpan",
    nzOrder: "nzOrder",
    nzOffset: "nzOffset",
    nzPush: "nzPush",
    nzPull: "nzPull",
    nzXs: "nzXs",
    nzSm: "nzSm",
    nzMd: "nzMd",
    nzLg: "nzLg",
    nzXl: "nzXl",
    nzXXl: "nzXXl"
  },
  exportAs: ["nzCol"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzColDirective = _NzColDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-col],nz-col,nz-form-control,nz-form-label",
      exportAs: "nzCol",
      host: {
        "[style.flex]": "hostFlexStyle"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    nzFlex: [{
      type: Input
    }],
    nzSpan: [{
      type: Input
    }],
    nzOrder: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzPush: [{
      type: Input
    }],
    nzPull: [{
      type: Input
    }],
    nzXs: [{
      type: Input
    }],
    nzSm: [{
      type: Input
    }],
    nzMd: [{
      type: Input
    }],
    nzLg: [{
      type: Input
    }],
    nzXl: [{
      type: Input
    }],
    nzXXl: [{
      type: Input
    }]
  });
})();
var _NzGridModule = class _NzGridModule {
};
_NzGridModule.ɵfac = function NzGridModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzGridModule)();
};
_NzGridModule.ɵmod = ɵɵdefineNgModule({
  type: _NzGridModule,
  imports: [NzColDirective, NzRowDirective],
  exports: [NzColDirective, NzRowDirective]
});
_NzGridModule.ɵinj = ɵɵdefineInjector({});
var NzGridModule = _NzGridModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGridModule, [{
    type: NgModule,
    args: [{
      imports: [NzColDirective, NzRowDirective],
      exports: [NzColDirective, NzRowDirective]
    }]
  }], null, null);
})();

// ../../../../../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tooltip.mjs
var _c0 = ["overlay"];
function NzToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzToolTipComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵtemplate(5, NzToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(3);
    ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle)("nzStringTemplateOutletContext", ctx_r1.nzTitleContext);
  }
}
var _NzTooltipBaseDirective = class _NzTooltipBaseDirective {
  /**
   * This true title that would be used in other parts on this component.
   */
  get _title() {
    return this.title || this.directiveTitle || null;
  }
  get _content() {
    return this.content || this.directiveContent || null;
  }
  get _trigger() {
    return typeof this.trigger !== "undefined" ? this.trigger : "hover";
  }
  get _placement() {
    const p = this.placement;
    return Array.isArray(p) && p.length > 0 ? p : typeof p === "string" && p ? [p] : ["top"];
  }
  get _visible() {
    return (typeof this.visible !== "undefined" ? this.visible : this.internalVisible) || false;
  }
  get _mouseEnterDelay() {
    return this.mouseEnterDelay || 0.15;
  }
  get _mouseLeaveDelay() {
    return this.mouseLeaveDelay || 0.1;
  }
  get _overlayClassName() {
    return this.overlayClassName || null;
  }
  get _overlayStyle() {
    return this.overlayStyle || null;
  }
  getProxyPropertyMap() {
    return {
      noAnimation: ["noAnimation", () => !!this.noAnimation]
    };
  }
  constructor(componentType) {
    this.componentType = componentType;
    this.visibleChange = new EventEmitter();
    this.internalVisible = false;
    this.destroy$ = new Subject();
    this.triggerDisposables = [];
    this.elementRef = inject(ElementRef);
    this.hostView = inject(ViewContainerRef);
    this.renderer = inject(Renderer2);
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    this.nzConfigService = inject(NzConfigService);
    this.platformId = inject(PLATFORM_ID);
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createComponent();
      this.registerTriggers();
    }
  }
  ngOnChanges(changes) {
    const {
      trigger
    } = changes;
    if (trigger && !trigger.isFirstChange()) {
      this.registerTriggers();
    }
    if (this.component) {
      this.updatePropertiesByChanges(changes);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearTogglingTimer();
    this.removeTriggerListeners();
  }
  show() {
    this.component?.show();
  }
  hide() {
    this.component?.hide();
  }
  /**
   * Force the component to update its position.
   */
  updatePosition() {
    if (this.component) {
      this.component.updatePosition();
    }
  }
  /**
   * Create a dynamic tooltip component. This method can be override.
   */
  createComponent() {
    const componentRef = this.hostView.createComponent(this.componentType);
    this.component = componentRef.instance;
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
    this.component.setOverlayOrigin(this.origin || this.elementRef);
    this.initProperties();
    const ngVisibleChange$ = this.component.nzVisibleChange.pipe(distinctUntilChanged());
    ngVisibleChange$.pipe(takeUntil(this.destroy$)).subscribe((visible) => {
      this.internalVisible = visible;
      this.visibleChange.emit(visible);
    });
    ngVisibleChange$.pipe(filter((visible) => visible), delay(0, asapScheduler), filter(() => Boolean(this.component?.overlay?.overlayRef)), takeUntil(this.destroy$)).subscribe(() => {
      this.component?.updatePosition();
    });
  }
  registerTriggers() {
    const el = this.elementRef.nativeElement;
    const trigger = this.trigger;
    this.removeTriggerListeners();
    if (trigger === "hover") {
      let overlayElement;
      this.triggerDisposables.push(this.renderer.listen(el, "mouseenter", () => {
        this.delayEnterLeave(true, true, this._mouseEnterDelay);
      }));
      this.triggerDisposables.push(this.renderer.listen(el, "mouseleave", () => {
        this.delayEnterLeave(true, false, this._mouseLeaveDelay);
        if (this.component?.overlay.overlayRef && !overlayElement) {
          overlayElement = this.component.overlay.overlayRef.overlayElement;
          this.triggerDisposables.push(this.renderer.listen(overlayElement, "mouseenter", () => {
            this.delayEnterLeave(false, true, this._mouseEnterDelay);
          }));
          this.triggerDisposables.push(this.renderer.listen(overlayElement, "mouseleave", () => {
            this.delayEnterLeave(false, false, this._mouseLeaveDelay);
          }));
        }
      }));
    } else if (trigger === "focus") {
      this.triggerDisposables.push(this.renderer.listen(el, "focusin", () => this.show()));
      this.triggerDisposables.push(this.renderer.listen(el, "focusout", () => this.hide()));
    } else if (trigger === "click") {
      this.triggerDisposables.push(this.renderer.listen(el, "click", (e) => {
        e.preventDefault();
        this.show();
      }));
    }
  }
  updatePropertiesByChanges(changes) {
    this.updatePropertiesByKeys(Object.keys(changes));
  }
  updatePropertiesByKeys(keys) {
    const mappingProperties = __spreadValues({
      // common mappings
      title: ["nzTitle", () => this._title],
      directiveTitle: ["nzTitle", () => this._title],
      content: ["nzContent", () => this._content],
      directiveContent: ["nzContent", () => this._content],
      trigger: ["nzTrigger", () => this._trigger],
      placement: ["nzPlacement", () => this._placement],
      visible: ["nzVisible", () => this._visible],
      mouseEnterDelay: ["nzMouseEnterDelay", () => this._mouseEnterDelay],
      mouseLeaveDelay: ["nzMouseLeaveDelay", () => this._mouseLeaveDelay],
      overlayClassName: ["nzOverlayClassName", () => this._overlayClassName],
      overlayStyle: ["nzOverlayStyle", () => this._overlayStyle],
      arrowPointAtCenter: ["nzArrowPointAtCenter", () => this.arrowPointAtCenter],
      cdkConnectedOverlayPush: ["cdkConnectedOverlayPush", () => this.cdkConnectedOverlayPush]
    }, this.getProxyPropertyMap());
    (keys || Object.keys(mappingProperties).filter((key) => !key.startsWith("directive"))).forEach((property) => {
      if (mappingProperties[property]) {
        const [name, valueFn] = mappingProperties[property];
        this.updateComponentValue(name, valueFn());
      }
    });
    this.component?.updateByDirective();
  }
  initProperties() {
    this.updatePropertiesByKeys();
  }
  updateComponentValue(key, value) {
    if (typeof value !== "undefined") {
      this.component[key] = value;
    }
  }
  delayEnterLeave(isOrigin, isEnter, delay2 = -1) {
    if (this.delayTimer) {
      this.clearTogglingTimer();
    } else if (delay2 > 0) {
      this.delayTimer = setTimeout(() => {
        this.delayTimer = void 0;
        isEnter ? this.show() : this.hide();
      }, delay2 * 1e3);
    } else {
      isEnter && isOrigin ? this.show() : this.hide();
    }
  }
  removeTriggerListeners() {
    this.triggerDisposables.forEach((dispose) => dispose());
    this.triggerDisposables.length = 0;
  }
  clearTogglingTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = void 0;
    }
  }
};
_NzTooltipBaseDirective.ɵfac = function NzTooltipBaseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTooltipBaseDirective)(ɵɵdirectiveInject(Type));
};
_NzTooltipBaseDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTooltipBaseDirective,
  features: [ɵɵNgOnChangesFeature]
});
var NzTooltipBaseDirective = _NzTooltipBaseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipBaseDirective, [{
    type: Directive
  }], () => [{
    type: Type
  }], null);
})();
var _NzTooltipBaseComponent = class _NzTooltipBaseComponent {
  constructor() {
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.directionality = inject(Directionality);
    this.nzTitle = null;
    this.nzContent = null;
    this.nzArrowPointAtCenter = false;
    this.nzOverlayStyle = {};
    this.nzBackdrop = false;
    this.cdkConnectedOverlayPush = true;
    this.nzVisibleChange = new Subject();
    this._visible = false;
    this._trigger = "hover";
    this.preferredPlacement = "top";
    this.dir = "ltr";
    this._classMap = {};
    this._prefix = "ant-tooltip";
    this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
    this.destroy$ = new Subject();
  }
  set nzVisible(value) {
    const visible = toBoolean(value);
    if (this._visible !== visible) {
      this._visible = visible;
      this.nzVisibleChange.next(visible);
    }
  }
  get nzVisible() {
    return this._visible;
  }
  set nzTrigger(value) {
    this._trigger = value;
  }
  get nzTrigger() {
    return this._trigger;
  }
  set nzPlacement(value) {
    const preferredPosition = value.map((placement) => POSITION_MAP[placement]);
    this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.nzVisibleChange.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }
  show() {
    if (this.nzVisible) {
      return;
    }
    if (!this.isEmpty()) {
      this.nzVisible = true;
      this.nzVisibleChange.next(true);
      this.cdr.detectChanges();
    }
    if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === "rtl") {
      this.overlay.overlayRef.setDirection("ltr");
    }
  }
  hide() {
    if (!this.nzVisible) {
      return;
    }
    this.nzVisible = false;
    this.nzVisibleChange.next(false);
    this.cdr.detectChanges();
  }
  updateByDirective() {
    this.updateStyles();
    this.cdr.detectChanges();
    Promise.resolve().then(() => {
      this.updatePosition();
      this.updateVisibilityByTitle();
    });
  }
  /**
   * Force the component to update its position.
   */
  updatePosition() {
    if (this.origin && this.overlay && this.overlay.overlayRef) {
      this.overlay.overlayRef.updatePosition();
    }
  }
  onPositionChange(position) {
    this.preferredPlacement = getPlacementName(position);
    this.updateStyles();
    this.cdr.detectChanges();
  }
  setOverlayOrigin(origin) {
    this.origin = origin;
    this.cdr.markForCheck();
  }
  onClickOutside(event) {
    const target = _getEventTarget(event);
    if (!this.origin.nativeElement.contains(target) && this.nzTrigger !== null) {
      this.hide();
    }
  }
  /**
   * Hide the component while the content is empty.
   */
  updateVisibilityByTitle() {
    if (this.isEmpty()) {
      this.hide();
    }
  }
  updateStyles() {
    this._classMap = {
      [this.nzOverlayClassName]: true,
      [`${this._prefix}-placement-${this.preferredPlacement}`]: true
    };
  }
};
_NzTooltipBaseComponent.ɵfac = function NzTooltipBaseComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTooltipBaseComponent)();
};
_NzTooltipBaseComponent.ɵdir = ɵɵdefineDirective({
  type: _NzTooltipBaseComponent,
  viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
    }
  }
});
var NzTooltipBaseComponent = _NzTooltipBaseComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipBaseComponent, [{
    type: Directive
  }], null, {
    overlay: [{
      type: ViewChild,
      args: ["overlay", {
        static: false
      }]
    }]
  });
})();
function isTooltipEmpty(value) {
  return value instanceof TemplateRef ? false : value === "" || !isNotNil(value);
}
var _NzTooltipDirective = class _NzTooltipDirective extends NzTooltipBaseDirective {
  constructor() {
    super(NzToolTipComponent);
    this.titleContext = null;
    this.trigger = "hover";
    this.placement = "top";
    this.cdkConnectedOverlayPush = true;
    this.visibleChange = new EventEmitter();
  }
  getProxyPropertyMap() {
    return __spreadProps(__spreadValues({}, super.getProxyPropertyMap()), {
      nzTooltipColor: ["nzColor", () => this.nzTooltipColor],
      titleContext: ["nzTitleContext", () => this.titleContext]
    });
  }
};
_NzTooltipDirective.ɵfac = function NzTooltipDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzTooltipDirective)();
};
_NzTooltipDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTooltipDirective,
  selectors: [["", "nz-tooltip", ""]],
  hostVars: 2,
  hostBindings: function NzTooltipDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tooltip-open", ctx.visible);
    }
  },
  inputs: {
    title: [0, "nzTooltipTitle", "title"],
    titleContext: [0, "nzTooltipTitleContext", "titleContext"],
    directiveTitle: [0, "nz-tooltip", "directiveTitle"],
    trigger: [0, "nzTooltipTrigger", "trigger"],
    placement: [0, "nzTooltipPlacement", "placement"],
    origin: [0, "nzTooltipOrigin", "origin"],
    visible: [0, "nzTooltipVisible", "visible"],
    mouseEnterDelay: [0, "nzTooltipMouseEnterDelay", "mouseEnterDelay"],
    mouseLeaveDelay: [0, "nzTooltipMouseLeaveDelay", "mouseLeaveDelay"],
    overlayClassName: [0, "nzTooltipOverlayClassName", "overlayClassName"],
    overlayStyle: [0, "nzTooltipOverlayStyle", "overlayStyle"],
    arrowPointAtCenter: [2, "nzTooltipArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
    cdkConnectedOverlayPush: [2, "cdkConnectedOverlayPush", "cdkConnectedOverlayPush", booleanAttribute],
    nzTooltipColor: "nzTooltipColor"
  },
  outputs: {
    visibleChange: "nzTooltipVisibleChange"
  },
  exportAs: ["nzTooltip"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var NzTooltipDirective = _NzTooltipDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-tooltip]",
      exportAs: "nzTooltip",
      host: {
        "[class.ant-tooltip-open]": "visible"
      },
      standalone: true
    }]
  }], () => [], {
    title: [{
      type: Input,
      args: ["nzTooltipTitle"]
    }],
    titleContext: [{
      type: Input,
      args: ["nzTooltipTitleContext"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-tooltip"]
    }],
    trigger: [{
      type: Input,
      args: ["nzTooltipTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzTooltipPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzTooltipOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzTooltipVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzTooltipMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzTooltipMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzTooltipOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzTooltipOverlayStyle"]
    }],
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzTooltipArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    cdkConnectedOverlayPush: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipColor: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzTooltipVisibleChange"]
    }]
  });
})();
var _NzToolTipComponent = class _NzToolTipComponent extends NzTooltipBaseComponent {
  constructor() {
    super(...arguments);
    this.nzTitle = null;
    this.nzTitleContext = null;
    this._contentStyleMap = {};
  }
  isEmpty() {
    return isTooltipEmpty(this.nzTitle);
  }
  updateStyles() {
    const isColorPreset = this.nzColor && isPresetColor(this.nzColor);
    this._classMap = {
      [this.nzOverlayClassName]: true,
      [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
      [`${this._prefix}-${this.nzColor}`]: isColorPreset
    };
    this._contentStyleMap = {
      backgroundColor: !!this.nzColor && !isColorPreset ? this.nzColor : null,
      "--antd-arrow-background-color": this.nzColor
    };
  }
};
_NzToolTipComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzToolTipComponent_BaseFactory;
  return function NzToolTipComponent_Factory(__ngFactoryType__) {
    return (ɵNzToolTipComponent_BaseFactory || (ɵNzToolTipComponent_BaseFactory = ɵɵgetInheritedFactory(_NzToolTipComponent)))(__ngFactoryType__ || _NzToolTipComponent);
  };
})();
_NzToolTipComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzToolTipComponent,
  selectors: [["nz-tooltip"]],
  exportAs: ["nzTooltipComponent"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-arrow-content", 3, "ngStyle"], [1, "ant-tooltip-inner", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
  template: function NzToolTipComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzToolTipComponent_ng_template_0_Template, 6, 11, "ng-template", 1, 0, ɵɵtemplateRefExtractor);
      ɵɵlistener("overlayOutsideClick", function NzToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClickOutside($event));
      })("detach", function NzToolTipComponent_Template_ng_template_detach_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hide());
      })("positionChange", function NzToolTipComponent_Template_ng_template_positionChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPositionChange($event));
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzOverlayModule, NzConnectedOverlayDirective],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion]
  },
  changeDetection: 0
});
var NzToolTipComponent = _NzToolTipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToolTipComponent, [{
    type: Component,
    args: [{
      selector: "nz-tooltip",
      exportAs: "nzTooltipComponent",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [zoomBigMotion],
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="nzTitle; context: nzTitleContext">{{ nzTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      imports: [OverlayModule, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzOverlayModule],
      standalone: true
    }]
  }], null, null);
})();
var _NzToolTipModule = class _NzToolTipModule {
};
_NzToolTipModule.ɵfac = function NzToolTipModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzToolTipModule)();
};
_NzToolTipModule.ɵmod = ɵɵdefineNgModule({
  type: _NzToolTipModule,
  imports: [NzToolTipComponent, NzTooltipDirective],
  exports: [NzToolTipComponent, NzTooltipDirective]
});
_NzToolTipModule.ɵinj = ɵɵdefineInjector({
  imports: [NzToolTipComponent]
});
var NzToolTipModule = _NzToolTipModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToolTipModule, [{
    type: NgModule,
    args: [{
      imports: [NzToolTipComponent, NzTooltipDirective],
      exports: [NzToolTipComponent, NzTooltipDirective]
    }]
  }], null, null);
})();

// ../../../../../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-form.mjs
var _c02 = ["*"];
var _c1 = (a0) => [a0];
var _c2 = (a0) => ({
  $implicit: a0
});
function NzFormControlComponent_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.innerTip);
  }
}
function NzFormControlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 4);
    ɵɵtemplate(2, NzFormControlComponent_Conditional_3_ng_container_2_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("@helpMotion", void 0);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c1, "ant-form-item-explain-" + ctx_r0.status));
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.innerTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(6, _c2, ctx_r0.validateControl));
  }
}
function NzFormControlComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzExtra);
  }
}
function NzFormControlComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzFormControlComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzFormLabelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tooltipIconType_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", tooltipIconType_r1)("nzTheme", ctx_r1.tooltipIcon.theme);
  }
}
function NzFormLabelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, NzFormLabelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzTooltipTitle", ctx_r1.nzTooltipTitle);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.tooltipIcon.type);
  }
}
var _NzFormItemComponent = class _NzFormItemComponent {
  setWithHelpViaTips(value) {
    this.withHelpClass = value;
    this.cdr.markForCheck();
  }
  setStatus(status) {
    this.status = status;
    this.cdr.markForCheck();
  }
  setHasFeedback(hasFeedback) {
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.status = "";
    this.hasFeedback = false;
    this.withHelpClass = false;
    this.destroy$ = new Subject();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzFormItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFormItemComponent,
  selectors: [["nz-form-item"]],
  hostAttrs: [1, "ant-form-item"],
  hostVars: 12,
  hostBindings: function NzFormItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
    }
  },
  exportAs: ["nzFormItem"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzFormItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFormItemComponent = _NzFormItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item",
      exportAs: "nzFormItem",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-form-item",
        "[class.ant-form-item-has-success]": 'status === "success"',
        "[class.ant-form-item-has-warning]": 'status === "warning"',
        "[class.ant-form-item-has-error]": 'status === "error"',
        "[class.ant-form-item-is-validating]": 'status === "validating"',
        "[class.ant-form-item-has-feedback]": "hasFeedback && status",
        "[class.ant-form-item-with-help]": "withHelpClass"
      },
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var NZ_CONFIG_MODULE_NAME = "form";
var DefaultTooltipIcon = {
  type: "question-circle",
  theme: "outline"
};
var _NzFormDirective = class _NzFormDirective {
  getInputObservable(changeType) {
    return this.inputChanges$.pipe(filter((changes) => changeType in changes), map((value) => value[changeType]));
  }
  constructor(nzConfigService, directionality) {
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzLayout = "horizontal";
    this.nzNoColon = false;
    this.nzAutoTips = {};
    this.nzDisableAutoTips = false;
    this.nzTooltipIcon = DefaultTooltipIcon;
    this.nzLabelAlign = "right";
    this.nzLabelWrap = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.inputChanges$ = new Subject();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    this.inputChanges$.next(changes);
  }
  ngOnDestroy() {
    this.inputChanges$.complete();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzFormDirective.ɵfac = function NzFormDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
};
_NzFormDirective.ɵdir = ɵɵdefineDirective({
  type: _NzFormDirective,
  selectors: [["", "nz-form", ""]],
  hostAttrs: [1, "ant-form"],
  hostVars: 8,
  hostBindings: function NzFormDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzLayout: "nzLayout",
    nzNoColon: [2, "nzNoColon", "nzNoColon", booleanAttribute],
    nzAutoTips: "nzAutoTips",
    nzDisableAutoTips: [2, "nzDisableAutoTips", "nzDisableAutoTips", booleanAttribute],
    nzTooltipIcon: "nzTooltipIcon",
    nzLabelAlign: "nzLabelAlign",
    nzLabelWrap: [2, "nzLabelWrap", "nzLabelWrap", booleanAttribute]
  },
  exportAs: ["nzForm"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NzFormDirective = _NzFormDirective;
__decorate([WithConfig()], NzFormDirective.prototype, "nzNoColon", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzAutoTips", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzTooltipIcon", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzLabelWrap", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-form]",
      exportAs: "nzForm",
      host: {
        class: "ant-form",
        "[class.ant-form-horizontal]": `nzLayout === 'horizontal'`,
        "[class.ant-form-vertical]": `nzLayout === 'vertical'`,
        "[class.ant-form-inline]": `nzLayout === 'inline'`,
        "[class.ant-form-rtl]": `dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzLayout: [{
      type: Input
    }],
    nzNoColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoTips: [{
      type: Input
    }],
    nzDisableAutoTips: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipIcon: [{
      type: Input
    }],
    nzLabelAlign: [{
      type: Input
    }],
    nzLabelWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzFormControlComponent = class _NzFormControlComponent {
  get disableAutoTips() {
    return this.nzDisableAutoTips !== void 0 ? toBoolean(this.nzDisableAutoTips) : !!this.nzFormDirective?.nzDisableAutoTips;
  }
  set nzHasFeedback(value) {
    this._hasFeedback = value;
    this.nzFormStatusService.formStatusChanges.next({
      status: this.status,
      hasFeedback: this._hasFeedback
    });
    if (this.nzFormItemComponent) {
      this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
    }
  }
  get nzHasFeedback() {
    return this._hasFeedback;
  }
  set nzValidateStatus(value) {
    if (value instanceof AbstractControl || value instanceof NgModel) {
      this.validateControl = value;
      this.validateString = null;
      this.watchControl();
    } else if (value instanceof FormControlName) {
      this.validateControl = value.control;
      this.validateString = null;
      this.watchControl();
    } else {
      this.validateString = value;
      this.validateControl = null;
      this.setStatus();
    }
  }
  watchControl() {
    this.validateChanges.unsubscribe();
    if (this.validateControl && this.validateControl.statusChanges) {
      this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null), takeUntil(this.destroyed$)).subscribe(() => {
        if (!this.disableAutoTips) {
          this.updateAutoErrorTip();
        }
        this.setStatus();
        this.cdr.markForCheck();
      });
    }
  }
  setStatus() {
    this.status = this.getControlStatus(this.validateString);
    this.innerTip = this.getInnerTip(this.status);
    this.nzFormStatusService.formStatusChanges.next({
      status: this.status,
      hasFeedback: this.nzHasFeedback
    });
    if (this.nzFormItemComponent) {
      this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
      this.nzFormItemComponent.setStatus(this.status);
    }
  }
  getControlStatus(validateString) {
    let status;
    if (validateString === "warning" || this.validateControlStatus("INVALID", "warning")) {
      status = "warning";
    } else if (validateString === "error" || this.validateControlStatus("INVALID")) {
      status = "error";
    } else if (validateString === "validating" || validateString === "pending" || this.validateControlStatus("PENDING")) {
      status = "validating";
    } else if (validateString === "success" || this.validateControlStatus("VALID")) {
      status = "success";
    } else {
      status = "";
    }
    return status;
  }
  validateControlStatus(validStatus, statusType) {
    if (!this.validateControl) {
      return false;
    } else {
      const {
        dirty,
        touched,
        status
      } = this.validateControl;
      return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
    }
  }
  getInnerTip(status) {
    switch (status) {
      case "error":
        return !this.disableAutoTips && this.autoErrorTip || this.nzErrorTip || null;
      case "validating":
        return this.nzValidatingTip || null;
      case "success":
        return this.nzSuccessTip || null;
      case "warning":
        return this.nzWarningTip || null;
      default:
        return null;
    }
  }
  updateAutoErrorTip() {
    if (this.validateControl) {
      const errors = this.validateControl.errors || {};
      let autoErrorTip = "";
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          autoErrorTip = errors[key]?.[this.localeId] ?? this.nzAutoTips?.[this.localeId]?.[key] ?? this.nzAutoTips.default?.[key] ?? this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[key] ?? this.nzFormDirective?.nzAutoTips.default?.[key];
        }
        if (!!autoErrorTip) {
          break;
        }
      }
      this.autoErrorTip = autoErrorTip;
    }
  }
  subscribeAutoTips(observable) {
    observable?.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      if (!this.disableAutoTips) {
        this.updateAutoErrorTip();
        this.setStatus();
        this.cdr.markForCheck();
      }
    });
  }
  constructor(cdr, i18n, nzFormStatusService) {
    this.cdr = cdr;
    this.nzFormStatusService = nzFormStatusService;
    this._hasFeedback = false;
    this.validateChanges = Subscription.EMPTY;
    this.validateString = null;
    this.destroyed$ = new Subject();
    this.status = "";
    this.validateControl = null;
    this.innerTip = null;
    this.nzAutoTips = {};
    this.nzFormItemComponent = inject(NzFormItemComponent, {
      host: true,
      optional: true
    });
    this.nzFormDirective = inject(NzFormDirective, {
      optional: true
    });
    this.subscribeAutoTips(i18n.localeChange.pipe(tap((locale) => this.localeId = locale.locale)));
    this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzAutoTips"));
    this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzDisableAutoTips").pipe(filter(() => this.nzDisableAutoTips === void 0)));
  }
  ngOnChanges(changes) {
    const {
      nzDisableAutoTips,
      nzAutoTips,
      nzSuccessTip,
      nzWarningTip,
      nzErrorTip,
      nzValidatingTip
    } = changes;
    if (nzDisableAutoTips || nzAutoTips) {
      this.updateAutoErrorTip();
      this.setStatus();
    } else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
      this.setStatus();
    }
  }
  ngOnInit() {
    this.setStatus();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  ngAfterContentInit() {
    if (!this.validateControl && !this.validateString) {
      if (this.defaultValidateControl instanceof FormControlDirective) {
        this.nzValidateStatus = this.defaultValidateControl.control;
      } else {
        this.nzValidateStatus = this.defaultValidateControl;
      }
    }
  }
};
_NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormControlComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzFormStatusService));
};
_NzFormControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFormControlComponent,
  selectors: [["nz-form-control"]],
  contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
    }
  },
  hostAttrs: [1, "ant-form-item-control"],
  inputs: {
    nzSuccessTip: "nzSuccessTip",
    nzWarningTip: "nzWarningTip",
    nzErrorTip: "nzErrorTip",
    nzValidatingTip: "nzValidatingTip",
    nzExtra: "nzExtra",
    nzAutoTips: "nzAutoTips",
    nzDisableAutoTips: [2, "nzDisableAutoTips", "nzDisableAutoTips", booleanAttribute],
    nzHasFeedback: [2, "nzHasFeedback", "nzHasFeedback", booleanAttribute],
    nzValidateStatus: "nzValidateStatus"
  },
  exportAs: ["nzFormControl"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzFormStatusService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 2,
  consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-explain", "ant-form-item-explain-connected"], [1, "ant-form-item-extra"], ["role", "alert", 3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [4, "nzStringTemplateOutlet"]],
  template: function NzFormControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd()();
      ɵɵtemplate(3, NzFormControlComponent_Conditional_3_Template, 3, 8, "div", 2)(4, NzFormControlComponent_Conditional_4_Template, 2, 1, "div", 3);
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵconditional(ctx.innerTip ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional(ctx.nzExtra ? 4 : -1);
    }
  },
  dependencies: [NgClass, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [helpMotion]
  },
  changeDetection: 0
});
var NzFormControlComponent = _NzFormControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-control",
      exportAs: "nzFormControl",
      preserveWhitespaces: false,
      animations: [helpMotion],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
    </div>
    @if (innerTip) {
      <div @helpMotion class="ant-form-item-explain ant-form-item-explain-connected">
        <div role="alert" [ngClass]="['ant-form-item-explain-' + status]">
          <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{
            innerTip
          }}</ng-container>
        </div>
      </div>
    }

    @if (nzExtra) {
      <div class="ant-form-item-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    }
  `,
      providers: [NzFormStatusService],
      host: {
        class: "ant-form-item-control"
      },
      imports: [NgClass, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzFormStatusService
  }], {
    defaultValidateControl: [{
      type: ContentChild,
      args: [NgControl, {
        static: false
      }]
    }],
    nzSuccessTip: [{
      type: Input
    }],
    nzWarningTip: [{
      type: Input
    }],
    nzErrorTip: [{
      type: Input
    }],
    nzValidatingTip: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzAutoTips: [{
      type: Input
    }],
    nzDisableAutoTips: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHasFeedback: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzValidateStatus: [{
      type: Input
    }]
  });
})();
function toTooltipIcon(value) {
  const icon = typeof value === "string" ? {
    type: value
  } : value;
  return __spreadValues(__spreadValues({}, DefaultTooltipIcon), icon);
}
var _NzFormLabelComponent = class _NzFormLabelComponent {
  set nzNoColon(value) {
    this.noColon = value;
  }
  get nzNoColon() {
    return this.noColon !== "default" ? this.noColon : !!this.nzFormDirective?.nzNoColon;
  }
  set nzTooltipIcon(value) {
    this._tooltipIcon = toTooltipIcon(value);
  }
  // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
  get tooltipIcon() {
    return this._tooltipIcon !== "default" ? this._tooltipIcon : toTooltipIcon(this.nzFormDirective?.nzTooltipIcon || DefaultTooltipIcon);
  }
  set nzLabelAlign(value) {
    this.labelAlign = value;
  }
  get nzLabelAlign() {
    return this.labelAlign !== "default" ? this.labelAlign : this.nzFormDirective?.nzLabelAlign || "right";
  }
  set nzLabelWrap(value) {
    this.labelWrap = value;
  }
  get nzLabelWrap() {
    return this.labelWrap !== "default" ? this.labelWrap : !!this.nzFormDirective?.nzLabelWrap;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.nzRequired = false;
    this.noColon = "default";
    this._tooltipIcon = "default";
    this.labelAlign = "default";
    this.labelWrap = "default";
    this.destroy$ = new Subject();
    this.nzFormDirective = inject(NzFormDirective, {
      skipSelf: true,
      optional: true
    });
    if (this.nzFormDirective) {
      this.nzFormDirective.getInputObservable("nzNoColon").pipe(filter(() => this.noColon === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzTooltipIcon").pipe(filter(() => this._tooltipIcon === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzLabelAlign").pipe(filter(() => this.labelAlign === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzLabelWrap").pipe(filter(() => this.labelWrap === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormLabelComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzFormLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFormLabelComponent,
  selectors: [["nz-form-label"]],
  hostAttrs: [1, "ant-form-item-label"],
  hostVars: 4,
  hostBindings: function NzFormLabelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-form-item-label-left", ctx.nzLabelAlign === "left")("ant-form-item-label-wrap", ctx.nzLabelWrap);
    }
  },
  inputs: {
    nzFor: "nzFor",
    nzRequired: [2, "nzRequired", "nzRequired", booleanAttribute],
    nzNoColon: [2, "nzNoColon", "nzNoColon", booleanAttribute],
    nzTooltipTitle: "nzTooltipTitle",
    nzTooltipIcon: "nzTooltipIcon",
    nzLabelAlign: "nzLabelAlign",
    nzLabelWrap: [2, "nzLabelWrap", "nzLabelWrap", booleanAttribute]
  },
  exportAs: ["nzFormLabel"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 6,
  consts: [["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]],
  template: function NzFormLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "label");
      ɵɵprojection(1);
      ɵɵtemplate(2, NzFormLabelComponent_Conditional_2_Template, 2, 2, "span", 0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-form-item-no-colon", ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
      ɵɵattribute("for", ctx.nzFor);
      ɵɵadvance(2);
      ɵɵconditional(ctx.nzTooltipTitle ? 2 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzFormLabelComponent = _NzFormLabelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormLabelComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-label",
      exportAs: "nzFormLabel",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <label [attr.for]="nzFor" [class.ant-form-item-no-colon]="nzNoColon" [class.ant-form-item-required]="nzRequired">
      <ng-content></ng-content>
      @if (nzTooltipTitle) {
        <span class="ant-form-item-tooltip" nz-tooltip [nzTooltipTitle]="nzTooltipTitle">
          <ng-container *nzStringTemplateOutlet="tooltipIcon.type; let tooltipIconType">
            <span nz-icon [nzType]="tooltipIconType" [nzTheme]="tooltipIcon.theme"></span>
          </ng-container>
        </span>
      }
    </label>
  `,
      host: {
        class: "ant-form-item-label",
        "[class.ant-form-item-label-left]": `nzLabelAlign === 'left'`,
        "[class.ant-form-item-label-wrap]": `nzLabelWrap`
      },
      imports: [NzOutletModule, NzTooltipDirective, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    nzFor: [{
      type: Input
    }],
    nzRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTooltipTitle: [{
      type: Input
    }],
    nzTooltipIcon: [{
      type: Input
    }],
    nzLabelAlign: [{
      type: Input
    }],
    nzLabelWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzFormSplitComponent = class _NzFormSplitComponent {
};
_NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormSplitComponent)();
};
_NzFormSplitComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFormSplitComponent,
  selectors: [["nz-form-split"]],
  hostAttrs: [1, "ant-form-split"],
  exportAs: ["nzFormSplit"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzFormSplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFormSplitComponent = _NzFormSplitComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormSplitComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-split",
      exportAs: "nzFormSplit",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-form-split"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzFormTextComponent = class _NzFormTextComponent {
};
_NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormTextComponent)();
};
_NzFormTextComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFormTextComponent,
  selectors: [["nz-form-text"]],
  hostAttrs: [1, "ant-form-text"],
  exportAs: ["nzFormText"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzFormTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFormTextComponent = _NzFormTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormTextComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-text",
      exportAs: "nzFormText",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-form-text"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzFormModule = class _NzFormModule {
};
_NzFormModule.ɵfac = function NzFormModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NzFormModule)();
};
_NzFormModule.ɵmod = ɵɵdefineNgModule({
  type: _NzFormModule,
  imports: [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
  exports: [NzGridModule, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]
});
_NzFormModule.ɵinj = ɵɵdefineInjector({
  imports: [NzFormLabelComponent, NzFormControlComponent, NzGridModule]
});
var NzFormModule = _NzFormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormModule, [{
    type: NgModule,
    args: [{
      imports: [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
      exports: [NzGridModule, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]
    }]
  }], null, null);
})();
export {
  DefaultTooltipIcon,
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
  NzFormModule,
  NzFormSplitComponent,
  NzFormTextComponent
};
//# sourceMappingURL=ng-zorro-antd_form.js.map
