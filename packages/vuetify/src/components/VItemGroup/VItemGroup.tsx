// Styles
import './VItemGroup.sass'

// Composables
import { makeGroupProps, useGroup } from '@/composables/group'
import { makeTagProps } from '@/composables/tag'

// Utilities
import { defineComponent } from 'vue'
import makeProps from '@/util/makeProps'

export const VItemGroupSymbol = Symbol.for('vuetify:v-item-group')

export default defineComponent({
  name: 'VItemGroup',

  props: makeProps({
    ...makeGroupProps({
      selectedClass: 'v-item--active',
    }),
    ...makeTagProps(),
  }),

  setup (props, { slots }) {
    const { isSelected, select, next, prev, step, selected } = useGroup(props, VItemGroupSymbol)

    return () => (
      <props.tag class="v-item-group">
        { slots.default?.({
            isSelected,
            select,
            next,
            prev,
            step,
            selected: selected.value,
        }) }
      </props.tag>
    )
  }
})
