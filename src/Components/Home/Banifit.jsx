
const Banifit = () => {
    return (
        <div className="flex">
            <section className="w-2/4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <div className="">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 ">ALL PROGRAMS</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Product Management</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Strategy & Leadership</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                    </div>
                </div>
            </section>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Programs</th>
                                <th className="p-3">Referrer Bonus</th>
                                <th className="p-3">Referee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>Professional Certificate Program in Product Management</p>
                                </td>
                                <td className="p-3">
                                    <p></p>
                                </td>
                                <td className="p-3">
                                    <p></p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>

                            </tr>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>PG Certificate Program in Strategic Product Management</p>
                                </td>
                                <td className="p-3">
                                    <p>₹ 9,000</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>

                            </tr>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>Executive Program in Data Driven Product Management</p>
                                </td>
                                <td className="p-3">
                                    <p>₹ 7,000</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Banifit;