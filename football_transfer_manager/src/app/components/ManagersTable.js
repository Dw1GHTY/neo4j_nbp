"use client"
import React from 'react'

const ManagersTable = ({ managers }) => {

    const allManagers = managers.map(manager => {
        const properties = manager.m.properties;

        return {
            name: properties.name,
            surname: properties.surname,
            age: properties.age,
            country: properties.country,
            club: properties.club,
            contract: properties.contract,
            salary: properties.salary
        };
    });

    return (
        <>
            <div class='max-w-screen-xl mx-6 dark:bg-slate-900 rounded my-4'>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Surname
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Club
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contract
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Salary
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Purchase</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allManagers.map((manager, index) => (
                                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="px-6 py-4">
                                        {manager.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {manager.surname}
                                    </td>
                                    <td class="px-6 py-4">
                                        {manager.age}
                                    </td>
                                    <td class="px-6 py-4">
                                        {manager.country}
                                    </td>
                                    <td class="px-6 py-4">
                                        {manager.club}
                                    </td>
                                    <td class="px-6 py-4">
                                        {manager.contract}
                                    </td>
                                    <td class="px-6 py-4">
                                        {manager.salary}
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Purchase</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManagersTable
