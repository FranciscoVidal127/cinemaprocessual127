import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Filme {
  id: string;
  title: string;
  slug: string;
  year: string;
  type: string;
  role: string;
  director?: string;
  description: string;
  image: string;
  festivals?: string;
  stills?: string[];
  created_at?: string;
}

export interface Foto {
  id: string;
  url: string;
  alt: string;
  ordem: number;
  created_at?: string;
}

export interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  read_time: string;
  excerpt: string;
  slug: string;
  tags: string[];
  origem: string;
  content: string;
  created_at?: string;
}

export async function getFilmes(): Promise<Filme[]> {
  const { data, error } = await supabase.rpc('get_filmes');

  if (error) {
    console.error('Erro ao buscar filmes:', error);
    return [];
  }

  return data || [];
}

export async function getFotos(): Promise<Foto[]> {
  const { data, error } = await supabase.rpc('get_fotos');

  if (error) {
    console.error('Erro ao buscar fotos:', error);
    return [];
  }

  return data || [];
}

export async function getFilmeBySlug(slug: string): Promise<any | null> {
  const { data: filmes, error } = await supabase.rpc('get_filme_by_slug', { p_slug: slug });

  if (error || !filmes || filmes.length === 0) {
    console.error('Erro ao buscar filme:', error);
    return null;
  }

  const filme = filmes[0];

  const { data: stills } = await supabase.rpc('get_stills_by_filme', { p_filme_id: filme.id });
  const { data: scenes } = await supabase.rpc('get_scenes_by_filme', { p_filme_id: filme.id });

  return {
    ...filme,
    stills: stills || [],
    scenes: scenes || [],
    cast: filme.elenco || []
  };
}

export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase.rpc('get_posts');

  if (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }

  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase.rpc('get_post_by_slug', { p_slug: slug });

  if (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }

  return data?.[0] ?? null;
}
