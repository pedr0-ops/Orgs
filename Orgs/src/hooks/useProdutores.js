import {useEffect, useState} from 'react';
import {getProductores} from '../services/dataService';

export default function useProdutores() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const response = getProductores();
    setTitle(response.titulo);
    setList(response.lista);
  }, []);

  return [title, list];
}
