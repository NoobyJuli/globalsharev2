
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/AGbR3FXcju">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/1005939846877020281/b07228c2acbe8c286472fe3368cf648e.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Diotor Entertainment</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Diotor Entertainment is a friendly community server with some selfmade bots. 
                                      The server's main language is Spanish but even if you speak any other languages like English or German you are still very welcome to join!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/hnBB2SEzR5">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1152207240799985664/1186729009854291988/discotools-xyz-icon_25.png?ex=65944e84&is=6581d984&hm=f78ea7620c4c2035c360855f69babee2d4f4484aa2ab310e984b86452faba978&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">This could be you!</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                   We are currently still looking for new partners! If you are interested, just open a ticket on our support server.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
