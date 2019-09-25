import BitbucketBranchesIcon from "@atlaskit/icon/glyph/bitbucket/branches";
import CalendarIcon from "@atlaskit/icon/glyph/calendar";
import DocumentIcon from '@atlaskit/icon/glyph/document';
import EmojiNatureIcon from "@atlaskit/icon/glyph/emoji/nature";
import EmojiObjectsIcon from "@atlaskit/icon/glyph/emoji/objects";
import EmojiTravelIcon from "@atlaskit/icon/glyph/emoji/travel";
import { AkNavigationItem, AkNavigationItemGroup } from "@atlaskit/navigation";
import PropTypes from 'prop-types';
import React, { Component } from "react";



const createItems = [
  {
    title: null,
    items: [
      ['/#event', 'Create Event', 'Create Event', CalendarIcon],
      ['/#nature', 'Create Nature', 'Create Nature', EmojiNatureIcon],
      ['/#idea', 'Create Idea', 'Create Idea', EmojiObjectsIcon],
      ['/#travel', 'Create Travel Plans', 'Create Travel Plans', EmojiTravelIcon],
    ],
  },
  {
    title: 'Group with title',
    items: [
      ['/#branch', <span>Create a <strong>Bitbucket branch</strong></span>, 'Bitbucket branch', BitbucketBranchesIcon],
      ['/#page', <span>Create a <strong>Confluence page</strong></span>, 'Confluence page', DocumentIcon],
    ],
  },
];

export default class CreateDrawer extends Component {
  static propTypes = {
    onItemClicked: PropTypes.func,
  };

  render() {
    return (
      <div>
        {
          createItems.map(itemGroup => {
            return (
              <AkNavigationItemGroup key={itemGroup.title} title={itemGroup.title}>
                {
                  itemGroup.items.map(item => {
                    const [url, text, label, Icon] = item;
                    return (
                      <AkNavigationItem
                        key={url}
                        href={url}
                        icon={<Icon label={label}/>}
                        text={text.valueOf()}
                        onClick={this.props.onItemClicked}
                      />
                    );
                  })
                }
              </AkNavigationItemGroup>
            )
          })
        }
      </div>
    )
  };
}
