import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BalletS1 from "../components/ballet-s1";
import BalletS2 from "../components/ballet-s2";
import BalletS3 from "../components/ballet-s3";
import BalletS4 from "../components/ballet-s4";

class Ballet extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BalletS1/>
                <BalletS2/>
                <BalletS3/>
                <BalletS4/>
            </Container>    
        );
    }
}

export default Ballet;