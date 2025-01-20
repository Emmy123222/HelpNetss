
// import ReadBalance from "@/components/readBalance";
// import Transfer from "@/components/transfer";   
import { useStarknetkitConnectModal} from "starknetkit";
import { useConnect, useDisconnect, useAccount, InjectedConnector } from "@starknet-react/core";
// import { Card } from '@radix-ui/themes';
// import { InjectedConnector } from "starknetkit/injected"
import img from "../assets/image1.png";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


function Connect() {

  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  // const navigate = useNavigate();

  const { account } = useAccount()


  const connectWallet = async () => {

    const connectors = [
      new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
      new InjectedConnector({ options: { id: "braavos", name: "Braavos" } })
    ]

    const { starknetkitConnectModal } = useStarknetkitConnectModal({
      connectors: connectors as any,
      dappName: "HelpNet UI",
      modalTheme: "system"

    })

    const { connector } = await starknetkitConnectModal()
    await connect({ connector } as any)
  }



  return (
    <div>

      <div className="relative">
        {!account ?
          <button
            onClick={connectWallet}
            className="w-full max-w-xs h-[50px] flex gap-3 justify-center items-center bg-black max-sm:py-3"
          >
            <p className="text-white text-lg md:text-[20px]">
              Connect Wallet
            </p>

            <img src={img} alt="Icon" className="w-[20px] h-[20px]" />
          </button>

          :
          <div>
            <button onClick={() => disconnect()}>Disconnect</button>
            {/* <div className="mt-8">Token Balance: <ReadBalance /> </div>
          <div className="mt-8">
            <Transfer/>
          </div> */}
          </div>
        }
      </div>
    </div>
  );
}

export default Connect




