import React, {Component} from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Alert
  } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import ClubData from '../../../SearchClubData'


export default class SearchMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      club_data : [],
      isLoading : true,
    }
  }

    componentDidMount(){
      fetch(`http://115.85.183.157:3000/club`,{
      method:'GET',
      headers:{
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      },
      })
      .then((response) => response.json())
      .then((response) =>{
        this.setState({club_data:response})
      })
      .catch((error) => Alert.alert("error"))
      .finally(() => {
        this.setState({ isLoading : false });
      });
    }

    renderItem = ({item},depart) =>{
      const colors = ['#8B0000','#FF8C00','#FFD700','#008000','#00BFFF','#0000CD','#663399','#BC8F8F']
      if(item.depart == depart)
      return(
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyClub",{id : item.club_id,img:item.img})}>
         <View style = {{height:200, width:120, marginLeft : 20, borderWidth:1, borderColor: colors[depart-1]}}>
        <View style = {{flex : 6}}>
           <Image source = {{uri : item.img}}
          style = {{flex:1, width : null,
            height:null, resizeMode: 'cover'}}/> 
        </View>
        <View style = {{flex : 1, paddingLeft:10, paddingTop:3, backgroundColor : colors[depart-1],justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color : 'white', fontSize : 15, fontWeight : "700"}}>{item.club_name}</Text>
        </View>

      </View>
        </TouchableOpacity>)
  }
  
    render(){
    
        return (
          <SafeAreaView style = {{ flex : 1, backgroundColor : "white"}}>
            <View style={{ flex: 1, backgroundColor : "white"}}>
              <View style = {{ height : this.starHeaderHeight, backgroundColor : 'white',
              borderBottomWidth : 1, borderBottomColor : '#dddddd'}}>
                <View style = {{flexDirection: 'row', padding:10,backgroundColor: 'white', marginHorizontal:20, 
                                shadowOffset : { width : 0, height : 0}, shadowColor: 'black', shadowOpacity: 0.2,elevation : 1, marginTop: Platform.OS == 'android' ? 30 : null}}>
                  <Icon name = "ios-search" size = {20} />
                  <TextInput
                  underlineColorAndroid = "transparent"
                    placeholder = " 동아리를 검색하세요"
                    placeholderTextColor="grey"
                    style = {{ flex : 1, fontWeight: '700',
                    backgroundColor : 'white'}}/>
                </View>
              </View>
              <ScrollView scrollEventThrottle = {16}>
              <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>체육</Text>
              <View style = {[styles.header,{borderBottomColor : "#8B0000"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,1)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                  </View>
                  
    
                  </View>
                  <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>연행예술</Text>
              <View style = {[styles.header,{borderBottomColor : "#FF8C00"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,2)}
                    keyboardShouldPersistTaps = "always"
                    />

                  </View>
                  </View>
                  
    
                  </View>
                  <View style = {{paddingTop : 10}}>
              <Text style = {styles.headerText}>사회활동</Text>
              <View style = {[styles.header,{borderBottomColor : "#FFD700"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,3)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                  </View>
                  </View>
              <View style = {{paddingTop : 10}}>
                <Text style = {styles.headerText}>레저스포츠</Text>
                  <View style = {[styles.header,{borderBottomColor : "#008000"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,4)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                </View>
             </View>

             <View style = {{paddingTop : 10}}>
                <Text style = {styles.headerText}>과학기술</Text>
                  <View style = {[styles.header,{borderBottomColor : "#00BFFF"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,5)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                </View>
             </View>

             <View style = {{paddingTop : 10}}>
                <Text style = {styles.headerText}>학술언론</Text>
                  <View style = {[styles.header,{borderBottomColor : "#0000CD"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,6)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                </View>
             </View>

             <View style = {{paddingTop : 10}}>
                <Text style = {styles.headerText}>창작전시</Text>
                  <View style = {[styles.header,{borderBottomColor : "#663399"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,7)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                </View>
             </View>

             <View style = {{paddingTop : 10}}>
                <Text style = {styles.headerText}>종교</Text>
                  <View style = {[styles.header,{borderBottomColor : "#BC8F8F"}]}/>
                
                <View style = {{flex:1, backgroundColor:'white', paddingTop : 10}}>
    
                  <View style = {{height : 220, marginTop: 7}}>
                  <FlatList 
                    data={this.state.club_data} 
                    keyExtractor={item => item.club_id.toString()} 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={item=>this.renderItem(item,8)}
                    keyboardShouldPersistTaps = "always"
                    />
                  </View>
                </View>
             </View>

             


              </ScrollView>
    
            </View>
          </SafeAreaView>
        );
      }
    }

const styles = StyleSheet.create({
    headerText : {
        flex : 1,
        fontSize : 22,
        fontWeight : '900',
        marginLeft : 20,
        marginBottom : 6
    },
    header : {
        flex : 1, 
        alignSelf : 'stretch', 
        justifyContent : 'flex-end', 
        marginRight: 150,
        marginLeft : 20, 
        borderBottomWidth : 3.5,
    }

})