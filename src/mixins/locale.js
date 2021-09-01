import { t } from '../utils/lang';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
