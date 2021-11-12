// import React, {useState} from 'react';
// import {
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   Alert,
//   Modal,
//   Pressable,
//   ImageBackground,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   Image,
//   Button,
//   Linking,
//   KeyboardAvoidingView,
//   TextInput,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [text, setText] = useState('');
//   const [click, setClick] = useState(false);
//   const renderItem = ({item}) => <Item title={item.title} />;
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }>
//         <View style={styles.centeredView}>
//           <Modal
//             animationType="slide"
//             // hardwareAccelerated={true}
//             transparent={true}
//             visible={modalVisible}
//             onShow={() => Alert.alert('Modal has been show.')}
//             onRequestClose={() => {
//               Alert.alert('Modal has been closed.');
//               setModalVisible(!modalVisible);
//             }}>
//             <View style={styles.centeredView}>
//               <View style={styles.modalView}>
//                 <Text style={styles.modalText}>Hello World!</Text>
//                 <Pressable
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => setModalVisible(!modalVisible)}>
//                   <Text style={styles.textStyle}>Hide Modal</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//           <Pressable
//             style={[styles.button, styles.buttonOpen]}
//             onPress={() => setModalVisible(true)}>
//             <Text style={styles.textStyle}>Show Modal</Text>
//           </Pressable>

//           {/* another work */}
//           {/* <ImageBackground
//         source={require('../Amotius/flag.png')}
//         resizeMode="cover"
//         style={styles.image}>
//         <SafeAreaView style={styles.container}>
//           <FlatList
//             data={DATA}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//           />
//           <View style={styles.container}>
//             <Image
//               style={styles.tinyLogo}
//               source={require('../Amotius/flag.png')}
//             />
//           </View>
//           <Button
//             title={'ait college'}
//             onPress={() =>
//               Linking.openURL(
//                 'https://www.youtube.com/channel/UCPPvwiulgjzMRuzhaa7chXQ',
//               )
//             }
//           />
//         </SafeAreaView>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={styles.container}>
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={styles.inner}>
//               <Text style={styles.header}>Header</Text>
//               <Text style={styles.header}>{text}</Text>
//               <TextInput
//                 placeholder="Username"
//                 style={styles.textInput}
//                 onChange={e => setText(e.target.value)}
//               />
//               <View style={styles.btnContainer}>
//                 <Button title="Submit" onPress={() => setClick(true)} />
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//       </ImageBackground> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 16,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   tinyLogo: {
//     width: '100%',
//     height: '100%',
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
import React, {useState} from 'react';
import {
  TextInput,
  Switch,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Text style={styles.textStyle}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style:{'\n'}
        {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
          StatusBar Transition:{'\n'}
          {statusBarTransition}
        </Text>
      ) : null}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsContainer}>
          <Text style={styles.textStyle}>Toggle StatusBar</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={!hidden ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={changeStatusBarVisibility}
            value={!hidden}
          />
        </View>
        {/* <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} /> */}
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
