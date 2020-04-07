import React from "react";
import {EmojiData,TotalDataEmojis,EmojiImage,EmojisGestureName} from "../EmojiCard/EmojiCardCss.js";


class EmojiCard extends React.Component{
    emojiDataFetch=(emojisDetails)=>{
        let list=emojisDetails.map((item)=>{
            return <EmojiData key={item.id} onClick={()=>this.props.onEmojiClick(item)} theme={this.props.theme}>
                        <EmojiImage src={item.image} alt={item.image}/>
                        <EmojisGestureName theme={this.props.theme}>{item.name}</EmojisGestureName>
                    </EmojiData>;
        });
        return list;
    }
    
    render(){
        
         const {emojisDetails}=this.props;
        return(
            <TotalDataEmojis theme={this.props.theme}>
            {this.emojiDataFetch(emojisDetails)}
            </TotalDataEmojis>
        );
    }
}
export default EmojiCard;
