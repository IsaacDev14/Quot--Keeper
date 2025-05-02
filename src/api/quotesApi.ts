import { Quote } from '../types/Quote';
import axios, { AxiosResponse } from "axios";

const quotesAPI = "https://api.jsonbin.io/v3/b/6813d7628a456b7966959abc";

export const getQuotes = (): Promise<AxiosResponse<Quote[]>> => {
  return axios.get<Quote[]>(quotesAPI); // ✅ Corrected
};

export const addQuote = (quote: { quote: string; author: string }) =>
  axios.post(quotesAPI, quote);

export const deleteQuote = (id: number) =>
  axios.delete(`${quotesAPI}/${id}`);

export const updateQuote = (id: number, updatedQuote: { quote: string; author: string }) =>
  axios.put(`${quotesAPI}/${id}`, updatedQuote);
