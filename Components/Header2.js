import * as React from 'react';
import { Appbar, Colors ,Title} from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { useNavigation } from '@react-navigation/native';


const Header2 = (props) => {
  
    const navigation = useNavigation();
  return (
    <Appbar.Header theme={
        {colors:{
            primary:"#5579c6"
        }}
    }
      
    >
        <Appbar.BackAction onPress={()=>navigation.goBack()} />
      
      
        <Title  >
            {props.name}
        </Title>
        
    </Appbar.Header>
  );
};

export default Header2;