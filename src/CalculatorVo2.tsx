import { useState } from 'react';


export default function CalculatorVo2() {
    const [weight, setWeight] = useState<number | ''>('');
    const [gender, setGender] = useState<number>(1);
    const [age, setAge] = useState<number | ''>('');
    const [time, setTime] = useState<number | ''>('');
    const [heartRate, setHeartRate] = useState<number | ''>('');
    const [vo2Max, setVo2Max] = useState<number | null>(null);

    const calculateVo2Max = () => {
        if (weight && age && time && heartRate) {
            const vo2 = 132.853 - (0.0769 * weight) - (0.3877 * age) + (6.315 * gender) - (3.2649 * time) - (0.1565 * heartRate);
            setVo2Max(vo2);
        }
    };

    return (
        <form className="space-y-6 md:w-10/12 flex flex-col">
            <h1 className="text-gray-900 mx-auto max-w-screen-xl text-center dark:text-white text-3xl font-extrabold mb-2">Rockport VO2Max Calculator</h1>
            <div>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Gender</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a Gender</option>
                    <option value="1" onClick={() => setGender(1)}> Man </option>
                    <option value="0" onClick={() => setGender(0)}> Woman </option>
                </select>
            </div>
            <div>
                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Weight (kg):
                </label>
                <input 
                    type="number" 
                    id="weight" 
                    name="weight" 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Age:
                </label>
                    <input 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(Number(e.target.value))}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Time (minutes):
                </label>
                    <input 
                        type="number"
                        value={time} 
                        onChange={(e) => setTime(Number(e.target.value))}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Heart Rate (bpm):
                </label>
                    <input 
                        type="number" 
                        value={heartRate} 
                        onChange={(e) => setHeartRate(Number(e.target.value))}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
            </div>
            <button type="button" onClick={calculateVo2Max} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Calculate VO2Max</button>
            {vo2Max !== null && (
                <div className="py-4 text-3xl font-extrabold text-gray-900 dark:text-white">
                    <h2>Your VO2Max is: {vo2Max.toFixed(5)} mL/kg/min</h2>
                </div>
            )}
        </form>
    )
}