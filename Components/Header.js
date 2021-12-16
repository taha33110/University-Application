import * as React from 'react';
import { Appbar, Colors ,Title} from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"




const Header = (props) => {
  
  
  return (
    <Appbar.Header  theme={
        {colors:{
            primary:"#5579c6"
        }}
       
    }
      
    >
      <Appbar.Action  icon="dots-vertical"   
      onPress={()=> {
        props.navigation.openDrawer()
        // console.log()
      //  props.navigation.openDrawer
      }}  />
       
        <Title  >
            {props.name}
        </Title>
        
    </Appbar.Header>
  );
};

export default Header;