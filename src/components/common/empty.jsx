// import React from 'react';
// import {ScrollView, View} from 'react-native';
// // components

// // styles
// import styles from '../../screens/home/home.styles';
// // svg or icon
// import EmptyBoxIcon from '../../../assets/logo/empty-box.svg';
// import {Text} from '../text/text';

// export const EmptyBoxComponent = ({orderPending, orderDelivered}) => {
//   return (
//     <ScrollView
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={[styles.center, {paddingVertical: 20}]}>
//       <EmptyBoxIcon />

//       {orderDelivered ? (
//         <Text
//           text="No Delivered Orders Found."
//           color="#565050"
//           style={{paddingVertical: 10, textAlign: 'center'}}
//         />
//       ) : orderPending ? (
//         <Text
//           text="No Pending Orders Found."
//           color="#565050"
//           style={{paddingVertical: 10, textAlign: 'center'}}
//         />
//       ) : (
//         <Text
//           text="No jobs found. Check our shifts."
//           color="#565050"
//           style={{paddingVertical: 10, textAlign: 'center'}}
//         />
//       )}

//       {/* <View style={[styles.center, styles.flexView]}>
//         <Text text="Mon - Fri:" color=COLORS.black />
//         <Text text="10am, 11am, 12pm, 5pm" />
//       </View>
//       <View style={[styles.center, styles.flexView]}>
//         <Text text="Sat:" color=COLORS.black />
//         <Text text="11am" />
//       </View> */}
//     </ScrollView>
//   );
// };
