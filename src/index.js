import Header from '../packages/header';
import Button from '../packages/button';
import ButtonList from '../packages/button-list';
import Cell from '../packages/cell';
import CellSwipe from '../packages/cell-swipe';
import Field from '../packages/field';
import FileList from '../packages/file-list';
import Badge from '../packages/badge';
import Switch from '../packages/switch';
import Switcher from '../packages/switcher';
import Spinner from '../packages/spinner';
import TabItem from '../packages/tab-item';
import TabContainerItem from '../packages/tab-container-item';
import TabContainer from '../packages/tab-container';
import Navbar from '../packages/navbar';
import SideNavbar from '../packages/side-navbar';
import Tabbar from '../packages/tabbar';
import Search from '../packages/search';
import Checklist from '../packages/checklist';
import Radio from '../packages/radio';
import Loadmore from '../packages/loadmore';
import Actionsheet from '../packages/actionsheet';
import Popup from '../packages/popup';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Range from '../packages/range';
import Picker from '../packages/picker';
import Select from '../packages/select';
import TextSelect from '../packages/text-select';
import DatetimeSelector from '../packages/datetime-selector';
import InfiniteCalendar from '../packages/infinite-calendar';
import TreeSelector from '../packages/tree-selector';
import Progress from '../packages/progress';
import Toast from '../packages/toast';
import Indicator from '../packages/indicator';
import MessageBox from '../packages/message-box';
import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload';
import DatetimePicker from '../packages/datetime-picker';
import IndexList from '../packages/index-list';
import IndexSection from '../packages/index-section';
import PaletteButton from '../packages/palette-button';
import Textarea from '../packages/textarea';
import Text from '../packages/text';
import Image from '../packages/image';
import FixedButton from '../packages/fixed-button';
import LayoutLeftRight from '../packages/layout-left-right';
import LayoutLeftRightItem from '../packages/layout-left-right-item';
import LayoutContainer from '../packages/layout-container';
import DirectiveFor from '../packages/directive-for';
import DirectiveIf from '../packages/directive-if';
import DirectiveElse from '../packages/directive-else';
import DirectiveElseIf from '../packages/directive-else-if';
import DirectiveShow from '../packages/directive-show';
import Hr from '../packages/hr';
import LayoutSpacing from '../packages/layout-spacing';
import Form from '../packages/form';
import '../src/assets/font/iconfont.css';
import merge from './utils/merge';

const version = '0.3.29';
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Header.name, Header);
  Vue.component(Button.name, Button);
  Vue.component(ButtonList.name, ButtonList);
  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Field.name, Field);
  Vue.component(FileList.name, FileList);
  Vue.component(Badge.name, Badge);
  Vue.component(Switch.name, Switch);
  Vue.component(Switcher.name, Switcher);
  Vue.component(Spinner.name, Spinner);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(Navbar.name, Navbar);
  Vue.component(SideNavbar.name, SideNavbar);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(Search.name, Search);
  Vue.component(Checklist.name, Checklist);
  Vue.component(Radio.name, Radio);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Actionsheet.name, Actionsheet);
  Vue.component(Popup.name, Popup);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Range.name, Range);
  Vue.component(Picker.name, Picker);
  Vue.component(Select.name, Select);
  Vue.component(TextSelect.name, TextSelect);
  Vue.component(DatetimeSelector.name, DatetimeSelector);
  Vue.component(InfiniteCalendar.name, InfiniteCalendar);
  Vue.component(TreeSelector.name, TreeSelector);
  Vue.component(Progress.name, Progress);
  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  Vue.component(PaletteButton.name, PaletteButton);
  Vue.component(Textarea.name, Textarea);
  Vue.component(Text.name, Text);
  Vue.component(Image.name, Image);
  Vue.component(FixedButton.name, FixedButton);
  Vue.component(LayoutLeftRight.name, LayoutLeftRight);
  Vue.component(LayoutLeftRightItem.name, LayoutLeftRightItem);
  Vue.component(LayoutContainer.name, LayoutContainer);
  Vue.component(DirectiveFor.name, DirectiveFor);
  Vue.component(DirectiveIf.name, DirectiveIf);
  Vue.component(DirectiveElse.name, DirectiveElse);
  Vue.component(DirectiveElseIf.name, DirectiveElseIf);
  Vue.component(DirectiveShow.name, DirectiveShow);
  Vue.component(Hr.name, Hr);
  Vue.component(LayoutSpacing.name, LayoutSpacing);
  Vue.component(Form.name, Form);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

window.MINT = {
  install,
  version,
    Header,
  Button,
  ButtonList,
  Cell,
  CellSwipe,
  Field,
  FileList,
  Badge,
  Switch,
  Switcher,
  Spinner,
  TabItem,
  TabContainerItem,
  TabContainer,
  Navbar,
  SideNavbar,
  Tabbar,
  Search,
  Checklist,
  Radio,
  Loadmore,
  Actionsheet,
  Popup,
  Swipe,
  SwipeItem,
  Range,
  Picker,
  Select,
  TextSelect,
  DatetimeSelector,
  InfiniteCalendar,
  TreeSelector,
  Progress,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  DatetimePicker,
  IndexList,
  IndexSection,
  PaletteButton,
  Textarea,
  Text,
  Image,
  FixedButton,
  LayoutLeftRight,
  LayoutLeftRightItem,
  LayoutContainer,
  DirectiveFor,
  DirectiveIf,
  DirectiveElse,
  DirectiveElseIf,
  DirectiveShow,
  Hr,
  LayoutSpacing,
  Form
};

export {
  install,
  version,
    Header,
  Button,
  ButtonList,
  Cell,
  CellSwipe,
  Field,
  FileList,
  Badge,
  Switch,
  Switcher,
  Spinner,
  TabItem,
  TabContainerItem,
  TabContainer,
  Navbar,
  SideNavbar,
  Tabbar,
  Search,
  Checklist,
  Radio,
  Loadmore,
  Actionsheet,
  Popup,
  Swipe,
  SwipeItem,
  Range,
  Picker,
  Select,
  TextSelect,
  DatetimeSelector,
  InfiniteCalendar,
  TreeSelector,
  Progress,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  DatetimePicker,
  IndexList,
  IndexSection,
  PaletteButton,
  Textarea,
  Text,
  Image,
  FixedButton,
  LayoutLeftRight,
  LayoutLeftRightItem,
  LayoutContainer,
  DirectiveFor,
  DirectiveIf,
  DirectiveElse,
  DirectiveElseIf,
  DirectiveShow,
  Hr,
  LayoutSpacing,
  Form
};
export default {
  install,
  version,
    Header,
  Button,
  ButtonList,
  Cell,
  CellSwipe,
  Field,
  FileList,
  Badge,
  Switch,
  Switcher,
  Spinner,
  TabItem,
  TabContainerItem,
  TabContainer,
  Navbar,
  SideNavbar,
  Tabbar,
  Search,
  Checklist,
  Radio,
  Loadmore,
  Actionsheet,
  Popup,
  Swipe,
  SwipeItem,
  Range,
  Picker,
  Select,
  TextSelect,
  DatetimeSelector,
  InfiniteCalendar,
  TreeSelector,
  Progress,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload,
  DatetimePicker,
  IndexList,
  IndexSection,
  PaletteButton,
  Textarea,
  Text,
  Image,
  FixedButton,
  LayoutLeftRight,
  LayoutLeftRightItem,
  LayoutContainer,
  DirectiveFor,
  DirectiveIf,
  DirectiveElse,
  DirectiveElseIf,
  DirectiveShow,
  Hr,
  LayoutSpacing,
  Form
};
