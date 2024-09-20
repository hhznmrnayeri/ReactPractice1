import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import { Nasa as NasaType } from "./Nasa.types";
export default function Nasa(props: NasaType) {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
              <span>{props.title}</span>
              <FaChevronDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-blue-700`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div className="flex items-start justify-between">
                <img className="w-32 rounded" src={props.url} alt="nasa" />
                <span>Date: {props.date}</span>
              </div>
              <p className="text-justify">{props.explanation}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
