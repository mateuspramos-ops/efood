import { Restaurante } from '../types'

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    nome: 'Bottega Romana',
    tipo: 'Italiana',
    avaliacao: 4.8,
    tempoEntrega: '35–45 min',
    destaque: 'Pizzas no forno a lenha',
    capa: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    cardapio: [
      {
        id: 101,
        nome: 'Margherita Classica',
        descricao: 'Molho de tomate San Marzano, mussarela de búfala e manjericão fresco.',
        preco: 52,
        imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80'
      },
      {
        id: 102,
        nome: 'Tagliatelle al Tartufo',
        descricao: 'Massa fresca, creme de trufas negras e parmesão envelhecido 24 meses.',
        preco: 68,
        imagem: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80'
      },
      {
        id: 103,
        nome: 'Risotto ai Funghi',
        descricao: 'Arbóreo cremoso com mix de cogumelos silvestres e azeite trufado.',
        preco: 59,
        imagem: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80'
      },
      {
        id: 104,
        nome: 'Tiramisù della Nonna',
        descricao: 'Receita de família com café espresso, mascarpone e cacau amargo.',
        preco: 28,
        imagem: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80'
      }
    ]
  },
  {
    id: 2,
    nome: 'Sakura Edomae',
    tipo: 'Japonesa',
    avaliacao: 4.9,
    tempoEntrega: '40–50 min',
    destaque: 'Peixe fresco do dia',
    capa: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80',
    cardapio: [
      {
        id: 201,
        nome: 'Combinado Sakura',
        descricao: '20 peças variadas de sashimi, niguiri e uramaki selecionados pelo chef.',
        preco: 89,
        imagem: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80'
      },
      {
        id: 202,
        nome: 'Ramen Tonkotsu',
        descricao: 'Caldo de 18 horas, chashu de porco, ovo marinado e cebolinha.',
        preco: 54,
        imagem: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80'
      },
      {
        id: 203,
        nome: 'Temaki de Salmão',
        descricao: 'Alga nori crocante, arroz temperado, salmão fresco e cream cheese.',
        preco: 32,
        imagem: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80'
      },
      {
        id: 204,
        nome: 'Gyoza Tradicional',
        descricao: 'Seis unidades recheadas com porco e repolho, selados na chapa.',
        preco: 26,
        imagem: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80'
      }
    ]
  },
  {
    id: 3,
    nome: 'Casa do Fogo',
    tipo: 'Steakhouse',
    avaliacao: 4.7,
    tempoEntrega: '45–55 min',
    destaque: 'Cortes na brasa',
    capa: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80',
    cardapio: [
      {
        id: 301,
        nome: 'Picanha na Brasa',
        descricao: '300g grelhados no ponto, acompanha farofa, vinagrete e arroz.',
        preco: 78,
        imagem: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80'
      },
      {
        id: 302,
        nome: 'Costela 12 Horas',
        descricao: 'Cozimento lento defumado, molho barbecue da casa e pão de alho.',
        preco: 72,
        imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
      },
      {
        id: 303,
        nome: 'Batata Rústica',
        descricao: 'Batatas assadas com alecrim, alho confitado e flor de sal.',
        preco: 24,
        imagem: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&q=80'
      },
      {
        id: 304,
        nome: 'Petit Gateau',
        descricao: 'Bolo de chocolate quente com sorvete de creme e calda de frutas vermelhas.',
        preco: 26,
        imagem: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80'
      }
    ]
  },
  {
    id: 4,
    nome: 'Verde Horta',
    tipo: 'Vegetariana',
    avaliacao: 4.6,
    tempoEntrega: '25–35 min',
    destaque: 'Produtos orgânicos locais',
    capa: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
    cardapio: [
      {
        id: 401,
        nome: 'Bowl Mediterrâneo',
        descricao: 'Grão-de-bico, homus, falafel, tabule e molho de tahine.',
        preco: 42,
        imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80'
      },
      {
        id: 402,
        nome: 'Hambúrguer de Lentilha',
        descricao: 'Blend de lentilha e cogumelos, queijo vegano e molho especial.',
        preco: 38,
        imagem: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=600&q=80'
      },
      {
        id: 403,
        nome: 'Salada Colorida',
        descricao: 'Mix de folhas, beterraba, cenoura, grão-de-bico e vinagrete cítrico.',
        preco: 32,
        imagem: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80'
      },
      {
        id: 404,
        nome: 'Suco Detox Verde',
        descricao: 'Couve, maçã verde, gengibre e limão espremidos na hora.',
        preco: 16,
        imagem: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80'
      }
    ]
  },
  {
    id: 5,
    nome: 'Taquería Sol',
    tipo: 'Mexicana',
    avaliacao: 4.5,
    tempoEntrega: '30–40 min',
    destaque: 'Pimentas importadas',
    capa: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=80',
    cardapio: [
      {
        id: 501,
        nome: 'Tacos al Pastor',
        descricao: 'Três unidades com carne marinada, abacaxi, cebola e coentro.',
        preco: 36,
        imagem: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80'
      },
      {
        id: 502,
        nome: 'Burrito Supremo',
        descricao: 'Recheado com carne, feijão, arroz, guacamole e pico de gallo.',
        preco: 44,
        imagem: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80'
      },
      {
        id: 503,
        nome: 'Nachos Supreme',
        descricao: 'Tortillas crocantes, queijo derretido, jalapeño e sour cream.',
        preco: 34,
        imagem: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&q=80'
      },
      {
        id: 504,
        nome: 'Churros con Cajeta',
        descricao: 'Seis unidades polvilhadas com canela e doce de leite mexicano.',
        preco: 22,
        imagem: 'https://images.unsplash.com/photo-1624471443229-94496e5d6c92?w=600&q=80'
      }
    ]
  },
  {
    id: 6,
    nome: 'Mar Aberto',
    tipo: 'Frutos do Mar',
    avaliacao: 4.8,
    tempoEntrega: '40–50 min',
    destaque: 'Pescado direto da colônia',
    capa: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&q=80',
    cardapio: [
      {
        id: 601,
        nome: 'Moqueca de Peixe',
        descricao: 'Peixe branco, leite de coco, dendê, pimentões e arroz branco.',
        preco: 84,
        imagem: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80'
      },
      {
        id: 602,
        nome: 'Camarão na Moranga',
        descricao: 'Camarões ao creme servidos dentro de moranga assada.',
        preco: 92,
        imagem: 'https://images.unsplash.com/photo-1559742811-822873691df8?w=600&q=80'
      },
      {
        id: 603,
        nome: 'Bobó de Camarão',
        descricao: 'Purê de mandioca, leite de coco, camarões e azeite de dendê.',
        preco: 76,
        imagem: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80'
      },
      {
        id: 604,
        nome: 'Ceviche da Casa',
        descricao: 'Peixe branco curado em limão, cebola roxa, coentro e pimenta.',
        preco: 48,
        imagem: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80'
      }
    ]
  }
]
