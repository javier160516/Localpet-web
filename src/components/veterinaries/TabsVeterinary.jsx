import React from 'react'
import { Tab } from '@headlessui/react';
import VeterinaryInfo from './VeterinaryInfo';
import VeterinaryServices from './VeterinaryServices';
import VeterinarySchedules from './VeterinarySchedules';

const TabsVeterinary = ({veterinary, setVeterinary, email, setEmail, telephone, setTelephone}) => {
    return (
        <Tab.Group>
            <Tab.List className='flex justify-center items-center border-b-2 text-orange-500'>
                <Tab className='px-3 mt-5 font-semibold transition-all outline-none'>
                    {({ selected }) => (
                        <button className={selected ? 'border-t border-x rounded-t-lg px-2 py-2 outline-none' : 'px-2 py-2 hover:border-t hover:border-x hover:rounded-t-lg outline-none'}>
                            Información
                        </button>
                    )}
                </Tab>
                <Tab className='px-3 mt-5 font-semibold outline-none'>
                    {({ selected }) => (
                        <button className={selected ? 'border-t border-x rounded-t-lg px-2 py-2 outline-none' : 'px-2 py-2 hover:border-t hover:border-x hover:rounded-t-lg outline-none'}>
                            Servicios
                        </button>
                    )}
                </Tab>
                <Tab className='px-3 mt-5 font-semibold outline-none'>
                    {({ selected }) => (
                        <button className={selected ? 'border-t border-x rounded-t-lg px-2 py-2 outline-none' : 'px-2 py-2 hover:border-t hover:border-x hover:rounded-t-lg outline-none'}>
                            Horarios
                        </button>
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    <VeterinaryInfo
                        veterinary={veterinary}
                        setVeterinary={setVeterinary}
                        email={email}
                        setEmail={setEmail}
                        telephone={telephone}
                        setTelephone={setTelephone}
                    />
                </Tab.Panel>
                <Tab.Panel>
                    <VeterinaryServices />
                </Tab.Panel>
                <Tab.Panel>
                    <VeterinarySchedules />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default TabsVeterinary