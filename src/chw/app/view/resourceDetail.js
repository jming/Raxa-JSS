/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.define('mUserStories.view.resourceDetail', {
    extend: 'Ext.Panel',
    config: {
        height: '100%',
        ui: 'neutral',
        items: [/*{
            xclass: 'mUserStories.view.titlebar'
        }, */
        {
            xtype: 'titlebar',
            // title: '',
            id: 'title_res_det',
            docked: 'top',
            items: [{
                xtype: 'button',
                ui: 'back',
                text: 'Back',
                id: 'back_res_det',
                listeners: {
                    tap: function () {
                        helper.doBack('resource')
                    }
                }
            }]
        }, {
            xclass: 'mUserStories.view.userToolbar'
        }, {
            xtype: 'container',
            id: 'resource_label',
            centered: true,
            height: '90%',
            width: '90%'
        }]
    }
})