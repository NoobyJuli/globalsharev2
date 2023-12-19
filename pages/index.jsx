import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          GlobalShare
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       GlobalShare is a clear and easy to set up advertising bot with unique features.
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/api/oauth2/authorize?client_id=1100500027840929963&permissions=259912895601&scope=applications.commands%20bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite GlobalShare
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/bot/1100500027840929963/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote for GlobalShare</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"GlobalShare" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "It's time to give your server an upgrade!" }}/>
            <a href="https://discord.com/api/oauth2/authorize?client_id=1100500027840929963&permissions=259912895601&scope=applications.commands%20bot" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite GlobalShare
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Customised setup</p>
                  <p className="text-gray-500 line-clamp-4">GlobalShare offers numerous options for optimising your bump embed.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Wide range</p>
                  <p className="text-gray-500 line-clamp-4">With over 5000 users, GlobalShare has a large network of servers. Unlike other advertising bots, your adverts are sent to all servers. </p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
                  <p className="text-gray-500 line-clamp-4">GlobalShare has various security features to ensure that your server is not harmed by other users. We offer an ultra-fast reporting system, as well as increased security measures in our server rating tool.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">Our small team of developers is constantly working on improving the bot and fixing bugs as quickly as possible. Ticket requests are usually processed within a few hours.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/1152207240799985664/1186723282075009105/image.png?ex=6594492e&is=6581d42e&hm=3be5a9808b4c49924f937d83a53a94a7bf71e9e6e08c36323a037a6caa766b8e&"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">🏆 Best Advertising Bot in 2023</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">The wide range of set-up options and simple design of our bot make GlobalShare the perfect advertising bot for your Discord server!</p>
                </div>
                <img src="https://cdn.discordapp.com/attachments/1152207240799985664/1186723282075009105/image.png?ex=6594492e&is=6581d42e&hm=3be5a9808b4c49924f937d83a53a94a7bf71e9e6e08c36323a037a6caa766b8e&" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
