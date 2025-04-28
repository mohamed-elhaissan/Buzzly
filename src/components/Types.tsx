const Types = () => {
    return (
        <div className='mt-6 mb-50  flex items-center gap-3  flex-wrap'>
            {
                allTypes.map((type: any, index: number) => (
                    <div key={index}>
                        <button
                            className='codeText text-sm bg-[#fcfcfc]  hover:bg-[#F3F3F3] transition duration-75 ease-in p-2 px-4 rounded cursor-pointer border border-[#f3f3f3]'
                        >
                            {type.name}
                        </button>
                        
                    </div>
                ))
            }
        </div>
    )
}
export default Types;


const allTypes = [
    {
        name: 'Default',
        snippet: `toast('Event has been created')`,

    },
    {
        name: 'Description',
        snippet: `toast.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,

    },
    {
        name: 'Success',
        snippet: `toast.success('Event has been created')`,
    },
    {
        name: 'Info',
        snippet: `toast.info('Be at the area 10 minutes before the event time')`,
    },
    {
        name: 'Warning',
        snippet: `toast.warning('Event start time cannot be earlier than 8am')`,
    },
    {
        name: 'Error',
        snippet: `toast.error('Event has not been created')`,
    },]