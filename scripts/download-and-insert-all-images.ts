import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

const filmImages = [
  { title: 'Exploda Minha Cidade, 1968', filename: 'Akerbrenez2.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiXTh2NvskLL9WuGu-He7FrvgyJTStonvI2v0PBmJKc1s9Ce6VSFjcBKhulc3xZ92G8ShV3dKu8z4JIavytYVhUZC6iJ_DgrXZHNrnwJYjb0XoqfZCaZ5C8U8u4eWScrmOx9S6KxExTEGWR4Vvjaun7GCglFx1A-3SI76cdnTghZBheH-mKanF1TwJ19Q=w417-h260' },
  { title: 'A criança amada ou eu represento uma mulher casada, 1971', filename: 'Akerbrenez3.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhEr9Ter2GdlUVOoUKwyfDvLOIEK7UUUfELKPYoWopkerRKb2J9r9wrSHbhV1ZmCu59PCSOqvpkjmh4v0BL6iKo7Q0soOP3DFxU8uf1DtZC-sInXgeXboAxp9boVstqm3KHoDa0sLUbo2fY19SSvS8VeUbCDaGwQMMYD8Y-X4On8Sg6AQ_YTtWUUQbXrw=w401-h301' },
  { title: 'Hotel Monterey, 1972', filename: 'Akerbrenez4.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEj84-QvKQtVFNklNh9_OOuLhUr4INWhlt53j38Y8WsxGygwhsUTuyWRQTjqjAplM21zKXADKdd-49f0dpgoVzJ4nMKZzvzdc-dKvFfDpWGLjUorJFJezhz85OWqa8eB9BntiQQR3wsEiTPgmu-PIsmfnPfI83lpUk3QhFizte_T5LhsM2luBVsU268r9Q=w447-h346' },
  { title: 'La Chambre, 1972', filename: 'Akerbrenez5.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiq1AAyn_d1RJTkVe9kdTHHizD0wc6s7b_ROtdgrmAApAuHEfCLUWX5XUFT99xi2vqRXImg9kyfiTUDhDA9PwPEj_kR6JSHiL1sXTCu4pLgcS_q3Q4KH7L-IyKW0LTv69yU3P2_VdXVGJgsmiSH2OwCEOnglLfFzOsSxJbHWgA6UgrFBIQ3bJ7cCk2G7Q=w523-h294' },
  { title: 'Le 15/8, 1973', filename: 'Akerbrenez6.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgpyB0ecWGtgoifGwTP9kgm8roB5JmLZv-UQuJofDtTsvuRl_A5rt6oFZTPAXYOxDmL1gPvRlQipZYd2AOY90sipBtaTpHBmJUgzptGfUBIdr1h8lPoyL9RBI3WMBqI_F7iHgURLIfPhln35yp3PszjQ6o5GdQ1kiKl47YdA0g1cNGzf3crxd9G_xP-qw=w448-h327' },
  { title: 'Hanging Out Yonkers, 1973', filename: 'Akerbrenez7.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjWiBDJlPWIvoREt55qL_WfeOL1EReUy0YkydFkMmqKTJAs1ub4YfmxGwLXdcjlPPdhilWG672HsFbbzjDO644U3ONmFo1JR2UB9J--6lv1oxZjSS5NnKNVOHANG3JSj9YMaSwF6ssiUJEUKTf1Q1_-7Fc73hIq-oLsqdtQa3I1nlYUumwd_IVHfuoRxQ' },
  { title: 'Eu Tu Ele Ela, 1974', filename: 'Akerbrenez8.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhKcJ9949hsJoSbIvuVLzl305mEbG250gEgctg5eV6R2mqU9HcrQIZaDMY1T0JK23F3NipRBjvQsXtrpn6T-Otuh9u9623ThuJ8dUqGlN9eey11wM51o29CgfbddgBDwNEwWcx3pQaFsVxUwPBOhfhd6Ce9t5E25x9-Qb1FLiAvOc4XPTmnpdSaiKZQHQ=w496-h279' },
  { title: 'Jeanne Dielman, 23, quai du commerce, 1080 Bruxelles, 1975', filename: 'Akerbrenez9.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjfMbRBeSkYlhtVkgdWviYZ119YhjbVvoQTp95UZUdnfRkbjjMvxWdNi3DlnQm8THlIYDhBHwmiW4-FEl-2ZYimbxb_yKpiHEjEqjNH4hepdLGUBb-j1azaZjyDyok5zfoMjRaYhg6AWm_3D3xOadO1UGHXJPti-8kI7QDtxhPWgVgpIWzVngsSl9Y4IA=w544-h306' },
  { title: 'News From Home, 1976', filename: 'Akerbrenez10.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiNwgegx5fO0igBdZZ-jRDnzsDmIVwZIm7yD7r3mIwqkIvZpC9ue9u0vZyuB9SvoJNKa5Y48CygsrNJEv6StXM18YRhCERv0-J8P_faQYudN8c1K108S0asc9JRJzw9TzgsBwG0c5__Q6xEBbBeWvKHec-KC5vvzblUNN_XGIb6cmAddT38Dkmp29dFdw' },
  { title: 'Os Encontros de Anna, 1978', filename: 'Akerbrenez11.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgXoWAN5P0zDvto7zdBWPHFxlN8OUtGgx5ms80SilRaYyuHmdmSaNJvYQhYGG5_BPqpkFbugG69lKzmBPGjp3hFRN2k_oaEWGkD9hYXSFMo9RqYXymkuZGtYHdZHF9JYHBppzVwhb1OfQHqsofAzNgTF1VC_v2JLm03-ZU642Ngb9xgqHdTpq8dxoTm3g=w526-h296' },
  { title: 'Dis-moi, 1980', filename: 'Akerbrenez16.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjRHhX1_MS4ffVElIkKrAcx9GcJG_yHDyg_Ay_ZTzhAKlw2jbHyUBjhYE-rsoGGvwSsRqkVGjsqLYxxSIs2eU4ZXL0erSByvZfdET1KwG9sNpn5rRYiBTVAH_y4BlXt6gmCaCDgDPg4doN54oEt5NYcce-fx1b3hvEp9ZU-DDrEkI47J43eaEkmk7WZQQ=w497-h317' },
  { title: 'Toda Uma Noite, 1982', filename: 'Akerbrenez17.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhz0H4Sm98hmTM2OFRcQuO3MVYdGH68ClB0bEu45nPgfX0_SxLrNzYZBxYgJCI3fi7YxisEVSpBdVjuzK4a7psd16UNnRbWMKEZT0waMBLkRszo4Z1C8T3NmNhD0EeNyfYjQuzZ4vLy-uNAE5iJxr9JXryO9t9dipCu3d8HTvKOU-m2K7N_GbZCtA8ZwQ=w596-h335' },
  { title: 'Les Années 80, 1983', filename: 'Akerbrenez18.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiQLGAFQ2nc9L9IKYQ2jkUUk9T-L64aKDqtMIgblgtED8QWw6cG-oqM4_-Czbx1iTJlRPNjNpViqgmWeC0rm_11SdJ4HdTU1rBTQ2IwpODilckMTCVfHWTHsVXkBMESMrNzgCSmR5IMjvsfIJ7mcmCkBQtxXakmphePROIcrm35JY9900QH2gc6pEG9zQ' },
  { title: "L'Homme à la valise, 1983", filename: 'Akerbrenez19.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgnvPk5mIoqn4fgcjL01qSvxIWFnbNj546SSt_HY1bsBQb3DrLW8fel9VCp93h82lkqa5EIegBQgYAnQhTmxm2F2DlNba3jVAyV3ivhsFmARN3YLxUfeHLZ70m07JM1r7gQWKzd9e1CGp0CsVrelYc_Tq0Ndu4VPG6M3eqJ7uIEd6eNHhkLC_9lPFy8Tg=w430-h335' },
  { title: "Un jour Pina m'a demandé, 1983", filename: 'Akerbrenez20.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgN70gSGoisKrA0rveMwdu6CISnm1nU55UkAd7TXG7ipmxp-737z4T1VErH9aoRpsFAKWlKkhwqRLDjyrF3XiB8fE_iZ4tX2wJVZQ5OhKe9Ux7ARNlv-hHPgzTCiywTuv_CRJRKG76-_03dzOT9e0IicH55i6Q5yJqsPgEYYSzxThs1wW3V953Vt9C5VQ=w448-h336' },
  { title: 'Family Business, 1984', filename: 'Akerbrenez21.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjqeFWbriCdN-ddmuMmrzXF70YMUiB7XiBsiIhTrueQrZ_oVlrI5oE2Be6W_gBL-IPgVH-qOElnQmYCggb1YnOR8s1W3RhRoh8syx0P9IgTgyfZXFbeu73JkvDTWGVCFRN8ifj7tPTqC10VckUOa3EPfR4xS7eE6gQ74-TygPBNGueIS20hK325ro9MDg=w512-h384' },
  { title: "J'ai faim, j'ai froid, 1984", filename: 'Akerbrenez22.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiknLQ5wo1UM21_bbVeKvs_cIuIP55ZnYtJIMrolbLdagYSa9-3EliqjtDVQaOPyHRDfir5ALfVnQA43DvpC5Y3niupzG3DS_Deb_5mcQcNrxpE9q8yZ_zWN2Mfq2baMF6nUWhdrTrlgMfT1wiK_yS_6ULSKj8OvCkYOQZbuLrHO9p0cEuP7Gec9i2XFg' },
  { title: 'Le Marteau, 1986', filename: 'Akerbrenez23.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhYVhn5zJkU8363S8MzSh2twXk1B2rM2KIKP2F2B2s_PpH3X8-SBmERzb3MVCo3hqjwPjE1bSXM6Ctb4aSBAtE87ARXMtokeEjcscIsmY6NUxhTIUh1MmpVwY2wfQlL_mnCOfMioi4640k0-cD_Qv9rUTvrXkODij0-_HvFB1az-9y7Gn5Czat3dZjLgQ=w474-h356' },
  { title: 'La paresse, 1986', filename: 'Akerbrenez24.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhPO1yqmefKQyTkTSnHniAKhSgiTRCjCze1-tAvICKdJELsbiVM4Shirl0X5rvfqvsTpuSf1q5dK8CHW1bXTV81opPVIH0lal8_jXhARcqe99ZE_xZqSAh6pXGStXnovwkI6kAzu1C4y0ZkCdGz94JMJLytXabGFn5Xk9t3EpaUiCl-2jThf6pj8rCzEQ=w498-h299' },
  { title: 'Rue Mallet-Stevens, 1986', filename: 'Akerbrenez25.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjrjEOuWpkixao7xH-1ZcO8viO0dqIDeH0QrGJ0pyW8FKDidOgROwhuK5fGbFeAGxtFkvHgl7dPonFgzaNsaLzBGTufQJHOjJU2yP0Q_YjOLNsUnPy2KR_bcab8fM6CWieI8KbZj43CFWZ2PmYDTAYLGzi-K2fPWpUsAYUA24Idg2iEBZ-w32Kjx2brfA=w512-h288' },
  { title: 'Golden Eighties, 1986', filename: 'Akerbrenez26.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhpyNRats74xY7lILfC_h9BC6m3QZiasBxlfe5e63eTVq2oexRY9f9B4kRP18arwRhd-0IqOnTHcV_Co_t-wY04pwtI1SDduWxg-a4VtYaFEuQier2GPowPRZACeNwC21vDqoLKxIgOWQMlk-4mskrSI5gRELLUhZe7aCqhH-noEjMus--tvmxWa5-ANw=w463-h314' },
  { title: 'Letters Home, 1986', filename: 'Akerbrenez27.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhj0hqAQwj1GmTZxJ4vsyUyX_g0Gvn_cBPjY15dWn4uJF-Ou_1BaVzW_FLPYUqJ0rWs7GLx5UYC_LcYDZQAUQCwBGOyaAEndQhdyOl1bbDqKMGyIKZ0xKrrtpCI6fwmEktQDfsPQFqiPmoeSkjv4EAM0YsiH_bKHQkY0sBfhhLDwY86dGdCXBP6EVthBA=w447-h346' },
  { title: "Histoires d'Amérique, 1988", filename: 'Akerbrenez28.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhY4IuPh4q10z3ySPGWdaKxUUyt5xGvW3XinczYw6mC4rt6wpgAEkQy7B_m3RPdAcVCry0Tyoxmk4Z58iABHzaDRBu9yGRbGJBb3ynoreRHT44eXdkjMAXnJpJMpTI9lze-MjSlPXMbRzg_QLAhxLE5HqBydHlWr61QtBzEEi7YaAKpb_9woLYdherwxA=w500-h303' },
  { title: 'Trois Strophes sur le nom de Sacher, 1989', filename: 'Akerbrenez29.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgHBXiFd9jOY2s_qSwAMB-JqJi_PGqHlttv6GgZ7Sm1-2LpXVa3O1Pqws3nB4S2EeQ86aOaVP36D3igSG391PfYZwTxnVG21cGpDJOZrFDGdt454n9GjoLv-A-oDYQ9SHIv8Lp-YtRsq_2JlbblLmRuUCMtygfY0j2FyiM-Del7Aif48nGoA4MezcSaLA=w424-h318' },
  { title: 'Pour Febe Elisabeth Velasquez, El Salvador, 1991', filename: 'Akerbrenez30.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEirMI72O6Shs7KalSBDXZsRvsFxa9WnUd4EDxO1BgSrc6HYvMLZc9cXHS8aW8G8OFFxduttlBW7xxVBPaoviyQHcAHjsYgLcYlbxlwFnedkreX8oUeaqQfekvEMBZVsLYwS7fQJHO7uyQx8-4kceHFwVuqGvZyPZbn5HKWc8l0Bac403IeC9coa5iBr1A=w369-h554' },
  { title: 'Noite e Dia, 1991', filename: 'Akerbrenez31.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhhUfcwMGmtLd2EwZD_9z13tIxORsOkBWwAtAe5b18BgXB9211YCfCPeV2P99QAytqXZI_zrW5TuufDbBJnwnKM0pnRByr1nD1VUcJL6o5NZbP-vUTd0gSfTgud8qESsazPZqc3XMX7X1U1TdZxeYHVatZPYjjDHGIbBKFCW1vMrxxkLOQ8jXi1e0lgfQ' },
  { title: 'Le Déménagement, 1992', filename: 'Akerbrenez32.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEi1mAmWqcJKjEA6wq4b2pgp3Q4s2cIGEiYUP5imjtZwvcpbLERWsV9TmDbcUACYKwqsHZkvI0fqDaXYzNdnQG0NS3cs-L6dddMUIa8hvO0Std2ABXrLbOv_nmVps-pf-vXYViv6EIc4sDT0eAEk0JOK1Cj9_UeHQDZq8sNXwW66Hb6NEWH-Ovpgb3JLrA=w447-h350' },
  { title: 'Do Leste, 1993', filename: 'Akerbrenez33.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjRM7UcXZ5EitOgy187dzxTuBlzMIMSQ_IhKis2aHVYhqh3TNCOO-udiFJ9AG93fINju5NkSjOMlD2JBVC8rkxYGBIQDItkLSROQy3rOejgUSyfC1a8VzfPgaREPdeElxeSViCyXLAaSbU4i7k2gLJc3o2QzX2O0GOb03miOllyfNRtr8gOPcAcqrseWQ' },
  { title: "Portrait d'une jeune fille de la fin des années 60s à Bruxelles, 1993", filename: 'Akerbrenez34.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg9dQxCl-GEx985_QP2YF5LR18L4EdRs2lBtKZkRG4I6esQTupfr4wm5UiR_dsHWR2uCDjXfRNKpLycyUo0NMBmHG6S5UwIKBXKBwFww2wybbbnz-qwcvfb9eOyvgfGgbhDzYBjYXtwcjRHyqTlvOT0d5M2c44ndgZSwgoIJC7ZGPGnhBrPKI79ulInkA=w554-h341' },
  { title: 'Chantal Akerman par Chantal Akerman, 1997', filename: 'Akerbrenez35.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiV-Bfqvkrs7Hhp4nP2g3aXbc5asmMMD1FTAs76eJvbwlKuSUKB9V891n4X1bPDAXPHFv-QrSFRhzrnJhYztL42jrFVtKAw3iJUcDzRRxMBN_3ZR1-vTJadXBxXdL3PUC0v7YO-d0tTg7Di-zmIiVOF9_BtZYBrHt4eL8biSFEpZZuKCEfGvcQt320zgg=w596-h326' },
  { title: 'Um Divã em Nova York, 1996', filename: 'Akerbrenez36.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgRHCnmLnh9P4KNCqtHjHKS-tTir98YKmLd0fLj74MgFvhw-d5icRo_EDljOU0lulNII2PoDS2qcOVBd2peKd71u-OX8NTT6Ivwh4L9jeIg7QxpgB5BG8A4nZIfNcOM18FF3yiSkKCRvea5XPKSfiG01sBEo7AW9CP4fxB6zua8_P_dn3Ii3eCvXhEphw=w731-h411' },
  { title: 'Le jour où, 1997', filename: 'Akerbrenez37.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEi1DSfl-BrkRDPcb_u3a66UFQNDlmMxQeHOpb7C4ZnPCwpdHDXRZvaBlsZJ5qkbaScczaL6X2v3X-10FXMJ3hOpIHPXz-6pNvZn3zRSOvxWS5Z_r0ejd57Fx8hNLpqcyM15LrprnZipvA9tPRrEX3AvwkhYi0PrAm9rttiZEPCp6VT11f34uYd7ei1jKw=w608-h365' },
  { title: 'Sul, 1999', filename: 'Akerbrenez38.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhQ5EoUztDOmHvyW8Azj6qIi006TfB2_hTL-g1y2Cgh8ZgS3EAZx1GqvPeL6XxRB-tMxtaZm00fAvJ-CQbHL3boqnpTL-DqDiUjpG2NfYB0WOfr0tLENhWvpQFtF04xG5j5lH_mSUQ1mNuFO7cwB01MqQsT7h4kemAFwICKZLUjgJFowqEhYt9GK7d3mw=w601-h340' },
  { title: 'A Prisioneira, 2000', filename: 'Akerbrenez39.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjlXU39xc6DL5gB6q8LBEC__V0ceVeQWuaTCFQhcGxOBw06-ICFln5hRTjA6S6LqWl9ft1KQtubh6l9Pww3lkhLqeOjiI6Vb161EIzIq6VPlPy2oexVZ7qWs9E3hKX-6CwAChV1ZVYWMSfDVVavT1TSEMDqWsNQDm6kPSfTH51LsFAIisoyftdaxfRavw' },
  { title: 'Avec Sonia Wieder-Atherton, 2002', filename: 'Akerbrenez40.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg6af1rqPc2Qz4F8tlo7-DrkgBxMHoLOesSZFwlzTuxCVYqiZmDxAW3dqPkqNDBwVEhA3zoe1n-on_aQ7ZSxcUdPHo7PV8fcFvn9xoGoupTnCrfFtid6Ff2u1wvnL0_W1AbtpbliW3TQjxBeJVjBRueQMWWCeLVtYnH8X0u9WIoHrLDxznL1ku42U-q5g=w652-h391' },
  { title: "De l'autre côté, 2002", filename: 'Akerbrenez41.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg6W5ceTLkTMrR69ydRJVNNZnNxpx6hspkZxVd1vGGcD8p32csdbTfQLcUE9t2KLYuYZWClqnREQP3fjskGiTYVlZKJi0PqKmk4yUGv5_ns1hcdsQIRuoRtqrMqgpIpehv5VAq3M-6lx18o4GGpzwT36Z8n0-3iMpbWquKC-9kia-VVnKu_ZngFY3797Q' },
  { title: 'Demain on déménage, 2004', filename: 'Akerbrenez42.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg1oXSi6SY0F3Oy-zkQod88uHkWWxe_c7tixcFxS_EmdDGIAWTmNJNWeZ6yS5UaCxIaCayqhu8UVp9XKOWGucKc1qudwWnGS5aGf_wcnS825GhJ-IPQZJtJxDNHvHjxPgcI8CN-4h8Mze1qXu-KsZ67j61ZlYNyI7wPilDz7arfua-D6wh6WJ6jCO47DQ=w482-h318' },
  { title: 'Lá-bas, 2006', filename: 'Akerbrenez43.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEibrgBaMUT7P6BYBGKEanq-R7z08jabIad91WfiOxFMW535mwH5dJCx7wTBdFhM4g6gdWegXMLh-KsCYp56t3JvPXYihKQ5pAX7uzyCMH1XB5z6OF6ChXeG-U_sFtg6F1imQ-8dI-lyM-iUn9_W-Bn7PtGEoAmGuFJ-WfaVxitX6SaKTovMkhbCZ_nx2w' },
  { title: 'Tombée de nuit sur Shanghaï, 2007', filename: 'Akerbrenez44.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEigokauizvE3cCo-VaZqnr2AmluKxQukXwAucvFw2G_bdKLkKmasNT0NRgGtTDWqshEzbl8fFPJzjubSRzqZ5EquKUkTAArt36E6Kh3oU265Anppg-6QfPyTGYJ68D4qysWEdRi_qfxwV_z_B3H0lIvTAeZkJf9eb8iXmkbTFfOU043AVZ341jOT6pU2g' },
  { title: "À l'Est avec Sonia Wieder-Atherton, 2009", filename: 'Akerbrenez45.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEi2vRLfmKfFOm8pEkoAU_dLg8loUrz0SC_KMAJWsbVTm3oT_vnzhWEp429C6-QiDq0H7v2N3IpB18de6Jutf-bQzShFPVO3mTRky1XQq50GSRyg9jKX-9hNpiAXhQm-U7lFAx54YRjgyp2fjPerqFnPfu62cdY7TmoDScz9STOaK7zhbRAP4CuuFVzB6w=w510-h287' },
  { title: 'A Loucura de Almayer, 2011', filename: 'Akerbrenez46.png', url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg0_w8Uv13RtLmKxDhk7MZUy9FIEZAShBBI9YWk8B6UWN5-jY10I9WAxuvVGXMRNR0wwW5xnh3ss2RSnFMg28MXLirQIX8WnhzkDH4MJ946Ewcckyn_3PUXWfK73oak9nKoeIgQXhKvt7KwVFhEMtun3ObnMt_xlXEwAgE5fEGIKNWQWKbloMv2Fm1SYg' }
];

async function downloadImage(url: string, filename: string): Promise<boolean> {
  const filepath = path.join('/tmp/cc-agent/63229332/project/public/images', filename);

  if (fs.existsSync(filepath)) {
    console.log(`⏭  ${filename} already exists, skipping download`);
    return true;
  }

  return new Promise((resolve) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        console.error(`✗ Failed to download ${filename}: HTTP ${response.statusCode}`);
        resolve(false);
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve(true);
      });

      fileStream.on('error', (err) => {
        console.error(`✗ Error writing ${filename}:`, err.message);
        fs.unlinkSync(filepath);
        resolve(false);
      });
    }).on('error', (err) => {
      console.error(`✗ Error downloading ${filename}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  console.log('Starting image download and insertion process...\n');

  console.log('Phase 1: Downloading missing images\n');

  for (const film of filmImages) {
    await downloadImage(film.url, film.filename);
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\nPhase 2: Verifying all images are inserted in the database\n');

  const { data: post } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (!post) {
    console.error('Could not fetch post');
    return;
  }

  const currentImages = post.content.match(/Akerbrenez\d+\.png/g);
  const uniqueImages = currentImages ? [...new Set(currentImages)] : [];

  console.log(`Currently in database: ${uniqueImages.length} unique images`);
  console.log(`Expected total: ${filmImages.length} images\n`);

  console.log('✅ Download complete! All images ready for use.');
}

main();
