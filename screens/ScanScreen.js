import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            buttonState:'normal',
            scannedData:'',
        }
    }

    getCameraPermission=async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status==='granted',
            buttonState:'clicked',
            scanned:false,
        })

    }

    handleBarCodeScanned=async=({type, data})=>{      
           this.setState({
               scannedData:data,
               scanned:true,
               buttonState:'normal'
            })
    }

    render(){
        
        if(this.state.buttonState==='normal'){
            return(
                <View style={styles.containter}>
                    <Image
                        style={styles.image}
                        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg'}}
                    />
                    <Text style={styles.title}>Bar Code Scanner</Text>
                    <Text>{this.state.hasCameraPermissions===true?this.state.scannedData:'please request camera permission'}</Text>
                    <TouchableOpacity style={styles.button} onPress={this.getCameraPermission}>
                        <Text style={styles.buttonText}>Scan QR Code</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if(this.state.buttonState==='clicked'&&this.state.hasCameraPermissions){
            return(
                <BarCodeScanner
                onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
            )
        }
        
    }
}

const styles = StyleSheet.create({
    containter:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    button:{
        backgroundColor:'blue',
        padding:20,
        borderRadius: 20
    },
    buttonText:{
        fontSize:30,
        textAlign:'center'
    },
    title:{
        fontSize: 40,
        paddingBottom: 30,
    },
    image:{
        alignSelf:'center',
        width:200,
        height:200,
    }
})