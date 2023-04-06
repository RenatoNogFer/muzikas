import envs from "../config/env.js"
import DatabaseClient from "../db/client.js";
import { Promotion } from "../types/promotions";

export default class PromotionsService {
  private dbClient: DatabaseClient;
  constructor() {
    this.dbClient = new DatabaseClient(envs.DATABASE_URL)
    console.info(envs.DATABASE_URL)
  }
  public async insert(promotion: Promotion) {

    console.info(Object.values(promotion))
    return new Promise<void>(
      (resolve, reject) => {
        this.dbClient.connect()
          .run(`INSERT INTO promotions(name,user_email, value, is_percent, category,active) VALUES (?,?,?,?,?,?)`, [
            promotion.name,
            promotion.user,
            promotion.value,
            promotion.isPercent,
            promotion.category,
            promotion.active
          ],
            (error) => {
              if (error) {
                console.error(error)
                reject(error)
              }
              resolve()
            }
          ).close()
        resolve()
      })
  }
  public get(promotionId: number) {
    return new Promise<Promotion[]>(
      (resolve, reject) => {
        this.dbClient.connect()
          .get(`SELECT * from promotions WHERE id=(?)`, [promotionId],
            (err, data: Promotion[]) => {
              if (err) {
                console.error(err)
                reject(err)
              }
              resolve(data)
            }
          ).close()
      }
    )

  }
  public getAll() {
    return new Promise<Promotion[]>(
      (resolve, reject) => {
        this.dbClient.connect()
          .all(`SELECT * from promotions`,
            (err, data: Promotion[]) => {
              if (err) {
                console.error(err)
                reject(err)
              }
              resolve(data)
            }
          ).close()
      }
    )
  }
  public update(promotion: Promotion) {
    return new Promise<boolean>(
      (resolve, reject) => {
        this.dbClient.connect()
          .run(`UPDATE promotions SET name=(?) , value=(?), is_percent=(?), category=(?) active=(?) WHERE id=(?)`,
            [
              promotion.name,
              promotion.value,
              promotion.isPercent,
              promotion.category,
              promotion.active,
              promotion.id
            ],
            (err) => {
              if (err) {
                console.error(err)
                reject(false)
              }
              resolve(true)
            }
          ).close()
      }
    )
  }

  public delete(promotionId: number) {
    return new Promise<boolean>(
      (resolve, reject) => {
        this.dbClient.connect()
          .run(`DELETE from promotions WHERE id=(?)`, [promotionId],
            (err) => {
              if (err) {
                console.error(err)
                reject(false)
              }
              resolve(true)
            }
          ).close()
      }
    )
  }
}