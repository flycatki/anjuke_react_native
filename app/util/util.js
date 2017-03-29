/**
 * Created by jiangyh on 17-3-29.
 */
import { Dimensions } from 'react-native';

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

export default function px2dp(px) {
  return px * deviceW / basePx;
}