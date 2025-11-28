import type React from "react";
import { useState, useEffect } from "react";
import DataContext from "../contexts/DataContext";

interface DataContextState {
	data: any | null;
	setData: (data: any) => void;
	isLoading: boolean;
	error: Error | null;
}

type DataProviderProps = {
	children: React.ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
	const [data, setData] = useState<any | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://miadil.github.io/starwars-api/api/all.json",
				);
				if (!response.ok) {
					throw new Error(`Erreur HTTP: ${response.status}`);
				}
				const jsonData = await response.json();
				setData(jsonData);
			} catch (e) {
				setError(e as Error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	const value: DataContextState = {
		data,
		isLoading,
		error,
		setData,
	};

	return (
		<DataContext.Provider value={value as unknown as any}>
			{children}
		</DataContext.Provider>
	);
};
