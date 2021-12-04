var ssLanding={
    closure:function(){
        let e=document.createElement("link");
        e.rel="stylesheet",
        e.href="https://customer.smartsender.eu/css/client/lp.css?f=1",
        document.head.appendChild(e);
        let t=document.getElementsByClassName("ss-landing");
        for(let e=0;e<t.length;e++){
            if (t[e].getAttribute("my-domain")) {
                s=t[e],
                a=s.getAttribute("data-domain"),
                d=s.getAttribute("data-target"),
                m=s.getAttribute("my-domain"),
                r="https://{domain}/lp/{target}".replace("{domain}",m).replace("{target}",d);
            } else {
                s=t[e],
                a=s.getAttribute("data-domain"),
                d=s.getAttribute("data-target"),
                m=s.getAttribute("my-domain"),
                r="https://{domain}.customer.smartsender.eu/lp/{target}".replace("{domain}",a).replace("{target}",d);
            }
            "undefined"!=typeof ssContext&&(r+="?context="+ssLanding.encode(ssContext));
            let i=document.createElement("iframe");
            i.src=r,
            i.setAttribute("frameborder","0"),
            i.setAttribute("class","ssInsertedFrame"),
            i.onload=i.onerror=function(){
                n(i)
            },
            !1===s.hasChildNodes()&&s.appendChild(i)
        }
        function n(e){
            window.addEventListener("message",function(t){
                t.data.hasOwnProperty("widget")&&e.setAttribute("style","height: "+t.data.widget.updates.height+"px")
            },
            !1)
        }
    },
    encode:function(e){
        let t=JSON.stringify(e);
        return btoa(unescape(encodeURIComponent(t)))
    },
    create:function(){
        !1===ssLanding.state&&ssLanding.closure(),
        ssLanding.state=!0
    },
    state:!1,
    timeout:2e3
};
document.addEventListener("DOMContentLoaded",function(){
    ssLanding.create()
}),
setTimeout(ssLanding.create,ssLanding.timeout);
