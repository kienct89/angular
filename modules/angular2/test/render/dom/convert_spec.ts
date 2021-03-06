import {MapWrapper} from 'angular2/src/facade/collection';
import {DirectiveMetadata} from 'angular2/src/render/api';
import {directiveMetadataFromMap, directiveMetadataToMap} from 'angular2/src/render/dom/convert';
import {ddescribe, describe, expect, it} from 'angular2/test_lib';

export function main() {
  describe('convert', () => {
    it('directiveMetadataToMap', () => {
      var someComponent = new DirectiveMetadata({
        compileChildren: false,
        hostListeners: MapWrapper.createFromPairs([['LKey', 'LVal']]),
        hostProperties: MapWrapper.createFromPairs([['PKey', 'PVal']]),
        hostActions: MapWrapper.createFromPairs([['AcKey', 'AcVal']]),
        hostAttributes: MapWrapper.createFromPairs([['AtKey', 'AtVal']]),
        id: 'someComponent',
        properties: ['propKey: propVal'],
        readAttributes: ['read1', 'read2'],
        selector: 'some-comp',
        type: DirectiveMetadata.COMPONENT_TYPE,
        exportAs: 'aaa',
        callOnDestroy: true,
        callOnChange: true,
        callOnCheck: true,
        callOnInit: true,
        callOnAllChangesDone: true,
        events: ['onFoo', 'onBar'],
        changeDetection: 'CHECK_ONCE'
      });
      var map = directiveMetadataToMap(someComponent);
      expect(map.get('compileChildren')).toEqual(false);
      expect(map.get('hostListeners')).toEqual(MapWrapper.createFromPairs([['LKey', 'LVal']]));
      expect(map.get('hostProperties')).toEqual(MapWrapper.createFromPairs([['PKey', 'PVal']]));
      expect(map.get('hostActions')).toEqual(MapWrapper.createFromPairs([['AcKey', 'AcVal']]));
      expect(map.get('hostAttributes')).toEqual(MapWrapper.createFromPairs([['AtKey', 'AtVal']]));
      expect(map.get('id')).toEqual('someComponent');
      expect(map.get('properties')).toEqual(['propKey: propVal']);
      expect(map.get('readAttributes')).toEqual(['read1', 'read2']);
      expect(map.get('selector')).toEqual('some-comp');
      expect(map.get('type')).toEqual(DirectiveMetadata.COMPONENT_TYPE);
      expect(map.get('callOnDestroy')).toEqual(true);
      expect(map.get('callOnCheck')).toEqual(true);
      expect(map.get('callOnChange')).toEqual(true);
      expect(map.get('callOnInit')).toEqual(true);
      expect(map.get('callOnAllChangesDone')).toEqual(true);
      expect(map.get('exportAs')).toEqual('aaa');
      expect(map.get('events')).toEqual(['onFoo', 'onBar']);
      expect(map.get('changeDetection')).toEqual('CHECK_ONCE');
    });

    it('mapToDirectiveMetadata', () => {
      var map = MapWrapper.createFromPairs([
        ['compileChildren', false],
        ['hostProperties', MapWrapper.createFromPairs([['PKey', 'testVal']])],
        ['hostListeners', MapWrapper.createFromPairs([['LKey', 'testVal']])],
        ['hostActions', MapWrapper.createFromPairs([['AcKey', 'testVal']])],
        ['hostAttributes', MapWrapper.createFromPairs([['AtKey', 'testVal']])],
        ['id', 'testId'],
        ['properties', ['propKey: propVal']],
        ['readAttributes', ['readTest1', 'readTest2']],
        ['selector', 'testSelector'],
        ['type', DirectiveMetadata.DIRECTIVE_TYPE],
        ['exportAs', 'aaa'],
        ['callOnDestroy', true],
        ['callOnCheck', true],
        ['callOnInit', true],
        ['callOnChange', true],
        ['callOnAllChangesDone', true],
        ['events', ['onFoo', 'onBar']],
        ['changeDetection', 'CHECK_ONCE']
      ]);
      var meta = directiveMetadataFromMap(map);
      expect(meta.compileChildren).toEqual(false);
      expect(meta.hostProperties).toEqual(MapWrapper.createFromPairs([['PKey', 'testVal']]));
      expect(meta.hostListeners).toEqual(MapWrapper.createFromPairs([['LKey', 'testVal']]));
      expect(meta.hostActions).toEqual(MapWrapper.createFromPairs([['AcKey', 'testVal']]));
      expect(meta.hostAttributes).toEqual(MapWrapper.createFromPairs([['AtKey', 'testVal']]));
      expect(meta.id).toEqual('testId');
      expect(meta.properties).toEqual(['propKey: propVal']);
      expect(meta.readAttributes).toEqual(['readTest1', 'readTest2']);
      expect(meta.selector).toEqual('testSelector');
      expect(meta.type).toEqual(DirectiveMetadata.DIRECTIVE_TYPE);
      expect(meta.exportAs).toEqual('aaa');
      expect(meta.callOnDestroy).toEqual(true);
      expect(meta.callOnCheck).toEqual(true);
      expect(meta.callOnInit).toEqual(true);
      expect(meta.callOnChange).toEqual(true);
      expect(meta.callOnAllChangesDone).toEqual(true);
      expect(meta.events).toEqual(['onFoo', 'onBar']);
      expect(meta.changeDetection).toEqual('CHECK_ONCE');
    });
  });
}
