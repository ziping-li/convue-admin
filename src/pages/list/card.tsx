{
  /* <route>
  meta:
    title: t('CardList.Title')
    head:
      title: t('CardList.Head.Title')
</route> */
}
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <a-button type="primary">button</a-button>
      </div>
    );
  },
});
