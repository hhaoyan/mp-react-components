import React, { useEffect, useRef, useState } from 'react';
import { MaterialsInput } from '../../../search/MaterialsInput';
import { useSearchUIContext, useSearchUIContextActions } from '../SearchUIContextProvider';
import { DualRangeSlider } from '../../../search/DualRangeSlider';
import { FaCaretDown, FaCaretRight, FaEllipsisV } from 'react-icons/fa';
import { Dropdown } from 'react-bulma-components';
import { FilterType, Filter } from '../constants';
import { Form } from 'react-bulma-components';
import classNames from 'classnames';

/**
 * Component for rendering a panel of filters that are part of a SearchUI component
 */

interface Props {
  className?: string;
}

export const SearchUIFilters: React.FC<Props> = props => {
  const state = useSearchUIContext();
  const actions = useSearchUIContextActions();
  const groupRefs = useRef(new Array(state.filterGroups.length));

  /**
   * Render filter component based on the filter's "type" property
   * Accepts the full filter object as an argument to render components
   * The groupId argument is used for components that need to
   * dynamically change their "props" property with actions.setFilterProps().
   */
  const renderFilter = (f: Filter, groupId: string) => {
    switch (f.type) {
      case FilterType.TEXT_INPUT:
        return (
          <div>
            <p className="has-text-weight-bold mb-1">{f.name}</p>
            <Form.Input
              {...f.props}
              type="text"
              value={state.filterValues[f.id]}
              onChange={e => actions.setFilterValue(e.target.value, f.id)}
            />
          </div>
        );
      case FilterType.MATERIALS_INPUT:
        return (
          <div>
            <p className="has-text-weight-bold mb-1">{f.name}</p>
            <MaterialsInput
              {...f.props}
              value={state.filterValues[f.id]}
              onChange={v => actions.setFilterValue(v, f.id)}
              onParsedValueChange={parsedValue =>
                actions.setFilterProps({ parsedValue }, f.id, groupId)
              }
              periodicTableMode="onFocus"
              // onFieldChange={field => actions.setFilterProps({ field }, f.id, groupId)}
            />
          </div>
        );
      case FilterType.SLIDER:
        return (
          <div>
            <p className="has-text-weight-bold mb-3">{f.name}</p>
            <DualRangeSlider
              {...f.props}
              values={state.filterValues[f.id]}
              onChange={v => actions.setFilterValue(v, f.id)}
            />
          </div>
        );
      default:
        null;
    }
    return null;
  };

  const renderActiveFilterCount = (group) => {
    let count = 0;
    const activeIds = state.activeFilters.map(f => f.id);
    group.filters.forEach((f) => {
      if (activeIds.indexOf(f.id) > -1) count++;
    });
    if (count > 0) {
      return <span> ({count})</span>
    } else {
      return null;
    }
  };

  useEffect(() => {
    groupRefs.current.forEach((el, i) => {
      // This is a special case for groups with periodic tables in them, should make more dynamic later
      if (state.filterGroups[i].name === 'Material') {
        el.style.maxHeight = (el.children[0].clientHeight + 244) + 'px';
      } else {
        el.style.maxHeight = el.children[0].clientHeight + 'px';
      }
    });
  }, []);

  return (
    <div className={props.className}>
      <div className="panel">
        <div className="panel-heading">
          <div className="level">
            <span>Filters</span>
            <Dropdown className="mp-dropdown" value="" label={<FaEllipsisV />} right={true}>
              <Dropdown.Item value="reset">
                <p onClick={e => actions.resetFilters()}>Reset filters</p>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="panel-block-container">
          {state.filterGroups.map((g, i) => (
            <div className="panel-block" style={{ padding: '1em' }} key={i}>
              <div className="control">
                <div
                  className={classNames('panel-block-title', 'is-clickable', {
                    'has-text-black-bis': !g.collapsed,
                    'has-text-grey': g.collapsed
                  })}
                  onClick={() => actions.toggleGroup(g.name)}
                >
                  <span className="is-size-5">{g.name}{renderActiveFilterCount(g)}</span>
                  <div className="is-pulled-right">
                    {g.collapsed ? <FaCaretRight /> : <FaCaretDown />}
                  </div>
                </div>
                <div
                  ref={el => (groupRefs.current[i] = el)}
                  className={classNames('panel-block-children', 'can-hide-with-transition', {'is-hidden-with-transition' : g.collapsed})}
                >
                  <div>
                    {g.filters.map((f, j) => (
                      <div className="mb-2" key={j}>
                        {renderFilter(f, g.name)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
