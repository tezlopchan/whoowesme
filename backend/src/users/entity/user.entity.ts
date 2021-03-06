import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Transaction } from '../../transactions/entity/transaction.entity'
import { JoinTable } from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  firstName?: string

  @Column({ nullable: false })
  lastName?: string

  @Column({ nullable: false })
  email: string

  @Column({ length: 65 })
  password: string

  @Column({ default: true })
  isActive?: boolean

  @JoinTable()
  @OneToMany(
    () => Transaction,
    transactions => transactions.user,
  )
  transactions?: Transaction[]
}
