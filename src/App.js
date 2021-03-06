import React from "react";

function makeid() {
   var text = "";
   var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

   return text;
}

const rand = () => {
   return Math.floor(Math.random() * 10);
};

const diff = () => {
   let ret = [];
   for (let i = 0; i <= 100; i++) {
      let id = makeid();
      ret.push(
         <div
            key={"i-" + i}
            style={{
               display: "inline-block",
               padding: 10,
               textAlign: "center",
               width: 50,
               border: "1px solid #333",
               margin: 3,
               backgroundColor: "#" + rand() + rand() + "F",
            }}
         >
            {id}
         </div>
      );
   }
   console.log(ret);
   return ret;
};

function App() {
   let t = diff();
   return (
      <div style={{ paddingLeft: 100, paddingTop: 130 }}>{t.map((o) => o)}</div>
   );
}

export default App;
